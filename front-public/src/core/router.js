import App from '../App.jsx'
import AboutPage from '../pages/About/AboutPage.jsx'
import CatalogPage from '../pages/Catalog/CatalogPage.jsx'
import MainPage from '../pages/Main/MainPage.jsx'
import ErrorPage from '../pages/Error.jsx'
import render from './render.js'
import ContactsPage from '../pages/Contacts/ContactsPage.jsx'
import SizesPage from '../pages/Sizes/SizesPage.jsx'
import MeasurementsPage from '../pages/Measurements/MeasurementsPage.jsx'
import CartPage from '../pages/Cart/CartPage.jsx'


console.log('load')

const routes = [
  { path: '/', component: MainPage, parentSelector: '#main' },
  { path: '/catalog', component: CatalogPage, parentSelector: '#main' },
  { path: '/about', component: AboutPage, parentSelector: '#main' },
  { path: '/contacts', component: ContactsPage, parentSelector: '#main' },
  { path: '/sizes', component: SizesPage, parentSelector: '#main' },
  { path: '/measurements', component: MeasurementsPage, parentSelector: '#main' },
  { path: '/cart', component: CartPage, parentSelector: '#main' },
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

export const redirect = (route) => {
  history.pushState({}, '', `${route}`)
  mountRoute()
}

window.addEventListener('popstate', () => mountRoute())