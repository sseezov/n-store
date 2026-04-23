import styles from './ProductCard.module.css'
import { state } from '../../../core/state'
import render from '../../../core/render';
import Header from '../../../shared/Header';
import CartIcon from '../../../shared/CartIcon';

export default function ProductCard({ product }) {
  const addToCart = () => {
    const { cart } = state;
    cart.addItem(product)
    console.log(cart.items);
    render('#cartIcon', <CartIcon />)
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
