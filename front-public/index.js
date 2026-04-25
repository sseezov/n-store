import { initWood } from '@sseezov/wood-js'
import App from './src/App'
import MainPage from './src/pages/Main/MainPage'
import CatalogPage from './src/pages/Catalog/CatalogPage'
import AboutPage from './src/pages/About/AboutPage'
import ContactsPage from './src/pages/Contacts/ContactsPage'
import SizesPage from './src/pages/Sizes/SizesPage'
import MeasurementsPage from './src/pages/Measurements/MeasurementsPage'
import CartPage from './src/pages/Cart/CartPage'
import Error from './src/pages/Error'

const routes = [
  { path: '/', component: MainPage, parentSelector: '#main' },
  { path: '/catalog', component: CatalogPage, parentSelector: '#main' },
  { path: '/about', component: AboutPage, parentSelector: '#main' },
  { path: '/contacts', component: ContactsPage, parentSelector: '#main' },
  { path: '/sizes', component: SizesPage, parentSelector: '#main' },
  { path: '/measurements', component: MeasurementsPage, parentSelector: '#main' },
  { path: '/cart', component: CartPage, parentSelector: '#main' },
]

initWood(App, routes, Error)