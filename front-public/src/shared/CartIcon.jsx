import styles from './CartIcon.module.css';
import { cart } from '../lib/cart';
import { redirect } from '../core/router';

export default function CartIcon() {
  const itemCount = cart.getItems().length
  return (
    <div class={styles.cartItem}>
      <button onClick={() => redirect('/cart')} class={styles.cartLink}>
        Корзина
        <span class={styles.badge}>{itemCount}</span>
      </button>
    </div>
  );
}