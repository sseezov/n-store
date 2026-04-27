// Header.jsx
import { state } from '../../state.js';
import { redirect } from '../core/router.js';
import CartIcon from './CartIcon';
import styles from './Header.module.css';

export default function Header() {
  const setActivePage = () => {
    console.log('setActivePage');
  }

  return (
    <header class={styles.header} onClick={setActivePage}>
      <div class={styles.nav} id='nav' >
        <ul class={styles.leftLinks}>
          <li><button onClick={() => redirect('/catalog')}>Каталог</button></li>
          <li><button onClick={() => redirect('/about')}>О нас</button></li>
        </ul>

        <div class={styles.logoWrapper}>
          <li><button onClick={() => redirect('/')}>Виссон</button></li>
        </div>

        <ul class={styles.rightLinks}>
          <li><button onClick={() => redirect('/sizes')}>Таблица размеров</button></li>
          <li><button onClick={() => redirect('/measurements')}>Как снять мерки</button></li>
          <li id='cartIcon'><CartIcon /></li>
        </ul>
      </div>
    </header>
  );
}