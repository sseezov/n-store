import styles from './ProductCard.module.css'
import { state } from '../../../core/state'
import render from '../../../core/render';
import Header from '../../../shared/Header';

export default function ProductCard({ product }) {
  const addToCart = (e) => {
    const { cart } = state;
    cart.addItem(product)
    console.log(cart.items);
    render('#header-container', <Header />)
  }

  return (
    <div class={styles.card}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price} ₽</p>
      <button class={styles.button}>Подробнее</button>
      <button class={styles.button} onClick={addToCart}>Добавить в корзину</button>
    </div>
  )
}
