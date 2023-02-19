import { CartCoffeeData } from '../contexts/CartContext'

const CART_STORAGE = '@coffeedelivery:cart'

export function CartStorageSave(cart: CartCoffeeData[]) {
  localStorage.setItem(CART_STORAGE, JSON.stringify(cart))
}

export function CartStorageGet() {
  const storage = localStorage.getItem(CART_STORAGE)

  const cart: CartCoffeeData[] = storage ? JSON.parse(storage) : []

  return cart
}
