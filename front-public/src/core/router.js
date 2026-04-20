import App from '../App.jsx'
import About from '../pages/About.jsx'
import Catalog from '../pages/Catalog.jsx'
import Main from '../pages/Main.jsx'
import ErrorPage from '../pages/Error.jsx'
import render from './render.js'


console.log('load')

const routes = [
  { path: '/', component: Main, parentSelector: '#main' },
  { path: '/catalog', component: Catalog, parentSelector: '#main' },
  { path: '/about', component: About, parentSelector: '#main' },
]

const navigate = pathname => routes
  .find((route) => {
    const pattern = route.path.replace(/:[^/]+/g, '([^/]+)') + '/?$'
    const regex = new RegExp('^' + pattern)
    return regex.test(pathname)
  }) || { component: ErrorPage, parentSelector: '#app' }

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '')
  if (window.location.href.at(-1) === '/') history.replaceState({}, '', href)
  const { pathname } = new URL(href)
  const { component, parentSelector } = navigate(pathname)
  render(parentSelector, component())
}

document.addEventListener('click', async (event) => {
  const link = event.target.closest('a')
  if (link) {
    const href = link.getAttribute('href')
    event.preventDefault()
    if (href === 'back') {
      history.back()
      return
    }
    history.pushState({}, '', `${href}`)
    mountRoute()
  }
})

window.addEventListener('popstate', () => mountRoute())