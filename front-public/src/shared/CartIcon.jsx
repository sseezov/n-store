import styles from './CartIcon.module.css';
import { cart } from '../lib/cart';

export default function CartIcon() {
  const itemCount = cart.getItems().length
  return (
    <div class={styles.cartItem}>
      <a href="/cart" class={styles.cartLink}>
        Корзина
        <span class={styles.badge}>{itemCount}</span>
      </a>
    </div>
  );
}