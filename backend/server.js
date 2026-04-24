import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

const builds = {
  '/admin': './builds/admin',
  '/': './builds/public',
};

export const server = http.createServer((req, res) => {
  // 1. Identify which build to serve based on the URL prefix
  const buildPrefix = Object.keys(builds).find(key => req.url.startsWith(key));
  
  if (!buildPrefix) {
    res.writeHead(404);
    return res.end('Build not found');
  }

  // 2. Resolve the file path
  let relativePath = req.url.replace(buildPrefix, '');
  if (relativePath === '/' || relativePath === '') relativePath = '/index.html';
  
  const filePath = path.join(builds[buildPrefix], relativePath);

  // 3. Serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Basic SPA support: if file not found, serve index.html for that build
      fs.readFile(path.join(builds[buildPrefix], 'index.html'), (err2, indexData) => {
        if (err2) {
          res.writeHead(404);
          res.end('File not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexData);
        }
      });
      return;
    }

    // Set basic Content-Type (add more types as needed)
    const ext = path.extname(filePath);
    const contentType = ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : 'text/html';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});
