import styles from './Slider.module.css';

export default function Slider({ categories }) {
  return (
    <ul class={styles.slider}>
      {categories.map((category) => (
        <li class={styles.slide} data-accName={category.id}>
          <h2>{category.title}</h2>
        </li>
      )
      )}
    </ul>
  )
}
