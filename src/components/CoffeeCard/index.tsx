import { ShoppingCartSimple } from 'phosphor-react'

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
          <Counter />
          <Button iconButton variant="secondary-dark">
            <ShoppingCartSimple weight="fill" size={22} />
          </Button>
        </Actions>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
