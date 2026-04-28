import styles from './CatalogPage.module.css';
import Search from '../../shared/Search';
import ProductCard from './components/ProductCard';
import { fetchCategories, fetchProducts } from '../../api';
import { redirect } from '../../core';
import CategoriesList from './components/CategoriesList';

export default async function CatalogPage() {
  const categories = await fetchCategories()
  const products = await fetchProducts()
  const { searchParams } = new URL(window.location.href)
  const categoryId = searchParams.get('category')
  const query = searchParams.get('q')
  const filterProducts = () => {
    if (query) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (categoryId) {
      return products.filter((product) => product.categoryId === +categoryId);
    }
    return products;
  }
  const searchProducts = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('value');
    redirect(`/catalog?q=${value}`);
  }
  const filterByCategory = (categoryId) => {
    redirect(`/catalog?category=${categoryId}`);
  }

  return (
    <div class={styles.catalog}>
      <div class={styles.searchWrapper}>
        <Search handler={searchProducts} />
      </div>

      <div class={styles.content}>
        <CategoriesList categories={categories} activeId={categoryId} filterByCategory={filterByCategory} />

        <div class={styles.productsGrid}>
          {filterProducts(products).map(product => <ProductCard product={product} />)}
        </div>
      </div>
    </div>
  );
}
