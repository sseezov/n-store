// Search.jsx
import styles from './Search.module.css';
import { redirect } from "../../../core/router"

export default function Search() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('value');
    if (value.trim()) {
      redirect(`/catalog?q=${value}`);
    }
  }

  return (
    <form class={styles.searchForm} onSubmit={onSubmit}>
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