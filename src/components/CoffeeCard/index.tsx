import { useState } from 'react'
import { toast } from 'react-toastify'
import { ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { CoffeeData } from '../../hooks/useCoffees'

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
  const [amount, setAmount] = useState<number>(1)
  const { addCoffee } = useCart()

  function handleIncreaseAmount() {
    setAmount((prevAmount) => prevAmount + 1)
  }

  function handleDecreaseAmount() {
    if (amount <= 1) return
    setAmount((prevAmount) => prevAmount - 1)
  }

  function handleCartButtonClick() {
    addCoffee({ id: coffee.id, amount })
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
          <small>R$</small> <span>{coffee.price}</span>
        </Price>
        <Actions>
          <Counter
            value={amount}
            onPlusClick={handleIncreaseAmount}
            onMinusClick={handleDecreaseAmount}
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
