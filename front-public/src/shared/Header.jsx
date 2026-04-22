// Header.jsx
import styles from './Header.module.css';

export default function Header() {
  return (
    <header class={styles.header}>
      <div class={styles.nav}>
        <ul class={styles.leftLinks}>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/about">О нас</a></li>
        </ul>

        <div class={styles.logoWrapper}>
          <a href="/" class={styles.logo}>Виссон</a>
        </div>

        <ul class={styles.rightLinks}>
          <li><a href="/sizes">Таблица размеров</a></li>
          <li><a href="/measure">Как снять мерки</a></li>
          <li><a href="/cart">Корзина</a></li>
        </ul>
      </div>
    </header>
  );
}