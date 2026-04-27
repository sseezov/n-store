// Header.jsx
import { state } from '../../state.js';
import { redirect } from '../core/router.js';
import CartIcon from './CartIcon';
import styles from './Header.module.css';

export default function Header() {
  const useNav = (e, path) => {
    const navButtons = document.querySelector('#nav').querySelectorAll('button')
    navButtons.forEach(btn => btn.classList.remove('activeLink'))
    e.target.classList.add('activeLink')
    console.log(navButtons);
    redirect(path)
  }
  const { pathname } = new URL(window.location.href)
  

  return (
    <header class={styles.header}>
      <div class={styles.nav} id='nav' >
        <ul class={styles.leftLinks}>
          <li><button class={pathname === '/catalog' ? 'activeLink' : ''} onClick={(e) => useNav(e, '/catalog')}>Каталог</button></li>
          <li><button class={pathname === '/about' ? 'activeLink' : ''} onClick={(e) => useNav(e, '/about')}>О нас</button></li>
        </ul>

        <div class={styles.logoWrapper}>
          <li><button class={pathname === '/' ? 'activeLink' : ''} onClick={(e) => useNav(e, '/')}>Виссон</button></li>
        </div>

        <ul class={styles.rightLinks}>
          <li><button class={pathname === '/sizes' ? 'activeLink' : ''} onClick={(e) => useNav(e, '/sizes')}>Таблица размеров</button></li>
          <li><button class={pathname === '/measurements' ? 'activeLink' : ''} onClick={(e) => useNav(e, '/measurements')}>Как снять мерки</button></li>
          <li id='cartIcon'><CartIcon handler={(e) => useNav(e, '/cart')}/></li>
        </ul>
      </div>
    </header>
  );
}