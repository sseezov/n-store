// pages/Cart/Cart.jsx
import { state } from '../../core/state';
import styles from './CartPage.module.css';

export default function Cart() {
  const { cart } = state
  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.items.length === 0) {
    return (
      <div class={styles.empty}>
        <h2>Корзина пуста</h2>
        <a href="/catalog" class={styles.button}>Перейти в каталог</a>
      </div>
    );
  }

  return (
    <div class={styles.cart}>
      <h3>Корзина</h3>

      <div class={styles.itemsList}>
        {cart.items.map(item => (
          <div key={item.id} class={styles.item}>
            <img src={item.image} alt={item.title} class={styles.image} />
            <div class={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.price} ₽</p>
            </div>
            <div class={styles.quantity}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div class={styles.total}>
              {item.price * item.quantity} ₽
            </div>
            <button onClick={() => removeFromCart(item.id)} class={styles.remove}>×</button>
          </div>
        ))}
      </div>

      <div class={styles.footer}>
        <div class={styles.totalSum}>
          Итого: {total} ₽
        </div>
        <button class={styles.checkout}>Оформить заказ</button>
      </div>
    </div>
  );
}