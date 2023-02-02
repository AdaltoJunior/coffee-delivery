import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartCoffeeData {
  id: number
  quantity: number
}

interface CartContextData {
  cartCoffees: CartCoffeeData[]
  addCoffee: (coffeeData: CartCoffeeData) => void
  subtractOne: (id: number) => void
  removeCoffee: (id: number) => void
  getCoffeeQuantity: (id: number) => number
  emptyCart: () => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<CartCoffeeData[]>([])

  function addCoffee(coffeeData: CartCoffeeData) {
    const coffeeIndexInCart = cartCoffees.findIndex(
      (cartCoffee) => cartCoffee.id === coffeeData.id,
    )

    if (coffeeIndexInCart === -1) {
      setCartCoffees([...cartCoffees, coffeeData])
      return
    }

    const newCartCoffees = [...cartCoffees]

    newCartCoffees[coffeeIndexInCart].quantity += coffeeData.quantity

    setCartCoffees(newCartCoffees)
  }

  function subtractOne(id: number) {
    const newCartCoffees = cartCoffees.map((cartCoffee) => {
      if (cartCoffee.id === id && cartCoffee.quantity > 1) {
        cartCoffee.quantity -= 1
      }

      return cartCoffee
    })

    setCartCoffees(newCartCoffees)
  }

  function removeCoffee(id: number) {
    const newCartCoffees = cartCoffees.filter(
      (cartCoffee) => cartCoffee.id !== id,
    )

    setCartCoffees(newCartCoffees)
  }

  function getCoffeeQuantity(id: number) {
    return cartCoffees.find((cartCoffee) => cartCoffee.id === id)?.quantity ?? 0
  }

  function emptyCart() {
    setCartCoffees([])
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        addCoffee,
        subtractOne,
        removeCoffee,
        getCoffeeQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
