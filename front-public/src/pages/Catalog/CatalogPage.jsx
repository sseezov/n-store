import styles from './CatalogPage.module.css';
import Search from '../../shared/Search';
import ProductCard from './components/ProductCard';
import { fetchCategories, fetchProducts } from '../../api';
import { redirect } from '../../core';

export default async function CatalogPage() {
  const categories = await fetchCategories()
  const products = await fetchProducts()
  const { searchParams } = new URL(window.location.href)
  const filterProducts = () => {
    const query = searchParams.get('q')
    const category = searchParams.get('category')
    console.log(query, category);
  }
  const searchProducts = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('value');
    searchParams.set('q', value)
    redirect(`${window.location.pathname}?${searchParams.toString()}`);
  }
  const filterByCategory = (categoryId) => {
    searchParams.set('category', categoryId)
    redirect(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <div class={styles.catalog}>
      <div class={styles.searchWrapper}>
        <Search handler={searchProducts} />
      </div>

      <div class={styles.content}>
        <aside class={styles.sidebar}>
          <h4>{`Всего ${products.length}`}</h4>
          <h3>Категории</h3>
          <ul class={styles.categoriesList}>
            {categories.map(category => (
              <li key={category.id}>
                <button onClick={() => filterByCategory(category.id)}>{category.title}</button>
              </li>
            ))}
          </ul>
        </aside>

        <div class={styles.productsGrid}>
          {products.map(product => <ProductCard product={product} />)}
        </div>
      </div>
    </div>
  );
}
