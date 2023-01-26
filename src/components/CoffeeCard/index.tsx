import { ShoppingCartSimple } from 'phosphor-react'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Counter } from '../Counter'

import coffeeImage from '../../assets/coffee-01.png'

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

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CardHeader>
        <CoffeeImage src={coffeeImage} alt="" />
        <TagsContainer>
          <Tag>Tradicional</Tag>
          <Tag>Com Leite</Tag>
        </TagsContainer>
      </CardHeader>

      <CardBody>
        <Heading as="strong" fontSize="xl">
          Expresso Tradicional
        </Heading>
        <Description>
          O tradicional café feito com água quente e grãos moídos
        </Description>
      </CardBody>

      <CardFooter>
        <Price>
          <small>R$</small> <span>9,90</span>
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
