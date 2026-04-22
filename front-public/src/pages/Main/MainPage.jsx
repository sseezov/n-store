import Search from "./components/Search";
import Slider from "./components/Slider";

export default function MainPage() {
  const categories = [
    { id: 1, title: 'Фелони', image: '/фелонь.jpg' },
    { id: 2, title: 'Подрясники', image: '/подрясник.jpg' },
    { id: 3, title: 'Рясы', image: '/ряса.jpg' },
    { id: 4, title: 'Литургические комплекты', image: '/комплект.jpg' },
  ];
  return (
    <div>
      <Search />
      <Slider categories={categories} />
      <h1>Раздел с новинками</h1>
      <h1>Популярные товары</h1>
    </div>
  )
}
