import styles from './CatalogPage.module.css';
import Search from '../../shared/Search';
import ProductCard from './components/ProductCard';

export default function CatalogPage() {
  const categories = [
    { id: 1, title: 'Фелони' },
    { id: 2, title: 'Подрясники' },
    { id: 3, title: 'Рясы' },
    { id: 4, title: 'Епитрахили' },
    { id: 5, title: 'Поручи' },
    { id: 6, title: 'Литургические комплекты' },
    { id: 7, title: 'Воздухи' },
    { id: 8, title: 'Стихари' }
  ];
  const products = [
    { id: 1, title: 'Фелонь праздничная', price: 45000, image: '/images/фелонь1.jpg', categoryId: 1 },
    { id: 2, title: 'Фелонь будничная', price: 35000, image: '/images/фелонь2.jpg', categoryId: 1 },
    { id: 3, title: 'Подрясник летний', price: 12000, image: '/images/подрясник1.jpg', categoryId: 2 },
    { id: 4, title: 'Подрясник зимний', price: 15000, image: '/images/подрясник2.jpg', categoryId: 2 },
    { id: 5, title: 'Ряса чёрная', price: 18000, image: '/images/ряса1.jpg', categoryId: 3 },
    { id: 6, title: 'Ряса синяя', price: 19000, image: '/images/ряса2.jpg', categoryId: 3 },
    { id: 7, title: 'Епитрахиль шитая', price: 25000, image: '/images/епитрахиль1.jpg', categoryId: 4 },
    { id: 8, title: 'Епитрахиль золотая', price: 35000, image: '/images/епитрахиль2.jpg', categoryId: 4 },
    { id: 9, title: 'Поручи с крестами', price: 8000, image: '/images/поручи1.jpg', categoryId: 5 },
    { id: 10, title: 'Поручи с архангелами', price: 10000, image: '/images/поручи2.jpg', categoryId: 5 },
    { id: 11, title: 'Комплект литургический', price: 120000, image: '/images/комплект1.jpg', categoryId: 6 },
    { id: 12, title: 'Воздух малый', price: 6000, image: '/images/воздух1.jpg', categoryId: 7 }
  ];

  return (
    <div class={styles.catalog}>
      <div class={styles.searchWrapper}>
        <Search />
      </div>

      <div class={styles.content}>
        <aside class={styles.sidebar}>
          <h3>Категории</h3>
          <ul class={styles.categoriesList}>
            {categories.map(cat => (
              <li key={cat.id}>
                <a href={`/catalog?category=${cat.id}`}>{cat.title}</a>
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
