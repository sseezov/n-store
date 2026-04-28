import styles from './CartIcon.module.css';
import { cart } from '../lib/cart';
import { redirect } from '../core/router';

export default function CartIcon({ handler }) {
  const itemCount = cart.getItems().length
  const { pathname } = new URL(window.location.href)

  return (
    <div class={styles.cartItem}>
      <button class={pathname === '/cart' ? `activeLink ${styles.cartLink}` : `${styles.cartLink}`} onClick={(e) => handler(e, '/cart')}>
        Корзина
        <span class={styles.badge}>{itemCount}</span>
      </button>
    </div>
  );
}