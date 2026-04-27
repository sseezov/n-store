import styles from './ProductCard.module.css'
import Header from '../../../shared/Header';
import CartIcon from '../../../shared/CartIcon';
import { cart } from '../../../lib/cart';
import { render } from '../../../core/render';

export default function ProductCard({ product }) {
  // const addToCart = () => {    
  //   cart.addItem(product)
  //   render('#cartIcon', <CartIcon />)
  // }

  return (
    <div class={styles.card}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price} ₽</p>
      <button class={styles.button}>Подробнее</button>
      <button class={styles.button}>Добавить в корзину</button>
    </div>
  )
}
