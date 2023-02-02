import { useState } from 'react'
import { toast } from 'react-toastify'
import { ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { CoffeeData } from '../../hooks/useCoffees'
import { priceFormat } from '../../utils/priceFormat'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Counter } from '../Counter'

import {
  Actions,
  CoffeeCardContainer,
  CoffeeImage,
  Description,
  CardFooter,
  Price,
  Tag,
  TagsContainer,
  CardBody,
  CardHeader,
} from './styles'

interface CoffeeCardProps {
  coffee: CoffeeData
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const { addCoffee } = useCart()

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity <= 1) return
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  function handleCartButtonClick() {
    addCoffee({ id: coffee.id, quantity })
    toast.success(`${coffee.title} foi adicionado ao carrinho!`)
  }

  return (
    <CoffeeCardContainer>
      <CardHeader>
        <CoffeeImage src={`/src/assets/coffees/${coffee.image}`} alt="" />
        <TagsContainer>
          {coffee.categories.map((category) => (
            <Tag key={category.id}>{category.title}</Tag>
          ))}
        </TagsContainer>
      </CardHeader>

      <CardBody>
        <Heading as="strong" fontSize="xl">
          {coffee.title}
        </Heading>
        <Description>{coffee.description}</Description>
      </CardBody>

      <CardFooter>
        <Price>
          <small>R$</small> <span>{priceFormat(coffee.price)}</span>
        </Price>
        <Actions>
          <Counter
            value={quantity}
            onPlusClick={handleIncreaseQuantity}
            onMinusClick={handleDecreaseQuantity}
          />
          <Button
            iconButton
            variant="secondary-dark"
            onClick={handleCartButtonClick}
          >
            <ShoppingCartSimple weight="fill" size={22} />
          </Button>
        </Actions>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
