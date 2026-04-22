import styles from './Slider.module.css';

export default function Slider({ categories }) {
  return (
    <div class={styles.container}>
      <h3>Категории изделий</h3>
      <ul class={styles.slider}>
        {categories.map((category) => {
          return <li class={styles.slide} data-accName={category.id}>
            <h2>{category.title}</h2>
          </li>
        })}
      </ul>

    </div>
  )
}
