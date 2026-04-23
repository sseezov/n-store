import { state } from "../core/state";

export const cart = {
  _items: state.cart,
  getItems: function(){
    return this._items.slice()
  },
  addItem: function (item) {
    const oldItems = this._items.slice()
    this._items = [...oldItems, item]
  },
  removeItem: function (itemId) {
    const oldItems = this._items.slice()
    this._items = oldItems.filter(item => item.id === itemId)
  }
}