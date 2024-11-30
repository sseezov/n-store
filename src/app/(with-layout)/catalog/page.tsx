import db from "@/modules/db";

export default async function Catalog() {
  const products = await db.product.findMany()

  return (
    <div>
      ЭТО СТРАНИЦА КАТАЛОГА
      {products.map((product) => <div key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>)}
    </div>
  )
}