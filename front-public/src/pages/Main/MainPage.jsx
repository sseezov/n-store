import { fetchCategories } from "../../api";
import { redirect } from "../../core";
import Search from "../../shared/Search";
import Slider from "./components/Slider";

export default async function MainPage() {
  const categories = await fetchCategories()
  const redirectToCatalog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('value');
    if (value.trim()) {
      redirect(`/catalog?q=${value}`);
    }
  }

  return (
    <>
      <Search handler={redirectToCatalog}/>
      <Slider categories={categories} />
      <h1>Раздел с новинками</h1>
      <h1>Популярные товары</h1>
    </>
  )
}
