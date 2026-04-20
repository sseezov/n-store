export default async function (parentSelector, content) {
  const innerHTML = await content
  document.querySelector(parentSelector).innerHTML = innerHTML
}