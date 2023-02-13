import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Trash } from 'phosphor-react'

import { api } from '../../../../services/api'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeDTO } from '../../../../dtos/CoffeeDTO'
import { priceFormat } from '../../../../utils/priceFormat'

import { Counter } from '../../../../components/Counter'

import {
  Coffee,
  CoffeeActions,
  CoffeePrice,
  CoffeeButton,
  TotalTextWrapper,
  ButtonSubmit,
  Total,
  CoffeesBoxContainer,
} from './styles'

interface CheckoutCoffeeData extends CoffeeDTO {
  quantity: number
}

const DELIVERY_PRICE = 3.5

export function CoffeesBox() {
  const [checkoutCoffees, setCheckoutCoffees] = useState<CheckoutCoffeeData[]>(
    [],
  )

  const {
    cartCoffees,
    getCoffeeQuantity,
    addCoffee,
    subtractOne,
    removeCoffee,
  } = useCart()

  const itemsTotal = checkoutCoffees.reduce((acc, checkoutCoffee) => {
    return acc + checkoutCoffee.price
  }, 0)

  useEffect(() => {
    if (cartCoffees.length <= 0) {
      return setCheckoutCoffees([])
    }

    async function fetchCoffees() {
      try {
        const query = cartCoffees.reduce((acc, cartCoffee) => {
          return acc === ''
            ? `id=${cartCoffee.id}`
            : `${acc}&id=${cartCoffee.id}`
        }, '')

        const response = await api.get<CoffeeDTO[]>(`/coffees?${query}`)

        const newCheckoutCoffees = response.data.map((coffee) => {
          const quantity = getCoffeeQuantity(coffee.id)

          return {
            ...coffee,
            quantity,
            price: coffee.price * quantity,
          }
        })

        setCheckoutCoffees(newCheckoutCoffees)
      } catch (error) {
        toast.error(
          'Ocorreu um erro durante esta ação, tente novamente mais tarde!',
        )
      }
    }

    fetchCoffees()
  }, [cartCoffees, getCoffeeQuantity])

  return (
    <CoffeesBoxContainer>
      {checkoutCoffees.map((checkoutCoffee) => (
        <Coffee key={checkoutCoffee.id}>
          <img src={`/src/assets/coffees/${checkoutCoffee.image}`} alt="" />

          <div>
            <h3>{checkoutCoffee.title}</h3>
            <CoffeeActions>
              <Counter
                value={checkoutCoffee.quantity}
                onMinusClick={() => subtractOne(checkoutCoffee.id)}
                onPlusClick={() =>
                  addCoffee({ id: checkoutCoffee.id, quantity: 1 })
                }
              />
              <CoffeeButton
                type="button"
                onClick={() => removeCoffee(checkoutCoffee.id)}
              >
                <Trash /> <span>Remover</span>
              </CoffeeButton>
            </CoffeeActions>
          </div>

          <CoffeePrice>R$ {priceFormat(checkoutCoffee.price)}</CoffeePrice>
        </Coffee>
      ))}

      <Total>
        <TotalTextWrapper>
          <p>Total de itens</p>
          <p>R$ {priceFormat(itemsTotal)}</p>
        </TotalTextWrapper>

        <TotalTextWrapper>
          <p>Entrega</p>
          <p>R$ {priceFormat(DELIVERY_PRICE)}</p>
        </TotalTextWrapper>

        <TotalTextWrapper>
          <strong>Total</strong>
          <strong>R$ {priceFormat(itemsTotal + DELIVERY_PRICE)}</strong>
        </TotalTextWrapper>
      </Total>

      <ButtonSubmit
        type="submit"
        variant="primary"
        disabled={checkoutCoffees.length <= 0}
      >
        Confirmar Pedido
      </ButtonSubmit>
    </CoffeesBoxContainer>
  )
}
