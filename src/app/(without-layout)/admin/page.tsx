import db from "@/modules/db";

export default async function Admin({}) {
  const products = await db.product.findMany()

  async function create() {
    'use server'
    const newProducts = ''
  }

  return (
    <div>
      <h1>
        ЭТО АДМИНКА
      </h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Создать</button>
      </form>
    </div>
  )
}