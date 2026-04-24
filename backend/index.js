import { server } from "./server.js";

server.listen(3000, () => console.log(`Serving builds on http://localhost:${3000}`));