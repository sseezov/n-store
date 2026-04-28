import { redirect } from '../../../core';
import styles from './Slider.module.css';

export default function Slider({ categories }) {
  const navigateToCatalog = (categoryId) => {
    console.log(1);
    redirect(`/catalog?category=${categoryId}`)
  }
  return (
    <ul class={styles.slider}>
      {categories.map((category) => (
        <li class={styles.slide} >
          <h2 onClick={()=>navigateToCatalog(category.id)}>{category.title}</h2>
        </li>
      )
      )}
    </ul>
  )
}
