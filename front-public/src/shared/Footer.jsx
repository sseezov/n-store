import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.column}>
          <h4>Контакты</h4>
          <ul>
            <li>Россия, г. Кемерово</li>
            <li>visson42@mail.ru</li>
            <li>+7 (XXX) XXX-XX-XX</li>
          </ul>
        </div>

        <div class={styles.column}>
          <h4>Социальные сети</h4>
          <ul>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">VK</a></li>
            <li><a href="#">Макс</a></li>
          </ul>
        </div>

        <div class={styles.column}>
          <h4>Публичная оферта</h4>
          <ul>
            <li><a href="#">Договор оферты</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Возврат и обмен</a></li>
            <li><a href="#">Условия доставки</a></li>
          </ul>
        </div>
      </div>

      <div class={styles.copyright}>
        © {new Date().getFullYear()} Церковное облачение
      </div>
    </footer>
  );
}
