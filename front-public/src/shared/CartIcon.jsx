// components/CartIcon/CartIcon.jsx
import { state } from '../core/state';
import styles from './CartIcon.module.css';

export default function CartIcon() {
  const { cart } = state;
  const itemCount = cart.items.length
  return (
    <div class={styles.cartItem}>
      <a href="/cart" class={styles.cartLink}>
        Корзина
        <span class={styles.badge}>{itemCount}</span>
      </a>
    </div>
  );
}