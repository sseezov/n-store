import styles from "./CategoriesList.module.css"

export default function CategoriesList({ categories, activeId, filterByCategory }) {
  return (
    <aside class={styles.sidebar}>
      <h3>Категории</h3>
      <ul class={styles.categoriesList}>
        {categories.map(category => (
          <li class={+activeId === +category.id ? 'activeCategory' : ''}>
            <button onClick={() => filterByCategory(category.id)}>{category.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
