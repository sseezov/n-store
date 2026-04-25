// Header.jsx
import { state } from '../../state.js';
import CartIcon from './CartIcon';
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
          <li><a href="/measurements">Как снять мерки</a></li>
          <li id='cartIcon'><CartIcon/></li>
        </ul>
      </div>
    </header>
  );
}