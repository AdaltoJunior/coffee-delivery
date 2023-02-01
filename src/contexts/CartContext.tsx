import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartCoffeeData {
  id: number
  amount: number
}

interface CartContextData {
  cartCoffees: CartCoffeeData[]
  addCoffee: (coffeeData: CartCoffeeData) => void
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

    newCartCoffees[coffeeIndexInCart].amount += coffeeData.amount

    setCartCoffees(newCartCoffees)
  }

  return (
    <CartContext.Provider value={{ cartCoffees, addCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
