import styles from './Search.module.css';

export default function Search({ handler }) {
  return (
    <form class={styles.searchForm} onSubmit={handler}>
      <input
        type="text"
        name="value"
        class={styles.input}
        placeholder="поиск по каталогу товаров"
      />
      <button type="submit" class={styles.button}>
        поиск
      </button>
    </form>
  );
}