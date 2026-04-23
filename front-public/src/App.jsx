import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function App() {
  const state = { cart: [] }
  console.log('app: ', state);

  return (
    <div>
      <div id="header-container">
        <Header />
      </div>
      <main id="main" class="main"></main>
      <Footer />
    </div>
  )
}