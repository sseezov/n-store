import { redirect } from "../../../core/router"

export default function Search() {
  const onSubmit = (e) => {
    const formData = new FormData(e.target)
    const value = formData.get('value')
    redirect(`/catalog?q=${value}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="value" placeholder="поиск по каталогу товаров" />
      <button type="submit">поиск</button>
    </form>
  )
}
