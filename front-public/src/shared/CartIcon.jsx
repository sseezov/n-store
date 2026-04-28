import styles from './CartIcon.module.css';
import { cart } from '../lib/cart';
import { redirect } from '../core/router';

export default function CartIcon({ handler }) {
  const itemCount = cart.getItems().length
  const { pathname } = new URL(window.location.href)

  return (
    <div class={styles.cartItem}>
      <button onClick={handler} class={pathname === '/cart' ? `activeLink ${styles.cartLink}` : `${styles.cartLink}`}>
        Корзина
        <span id="cartItemsCount" class={styles.badge}>{itemCount}</span>
      </button>
    </div>
  );
}