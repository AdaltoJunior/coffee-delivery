import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

import coffeeImage from '../../../../assets/coffee-01.png'

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

export function CoffeesBox() {
  return (
    <CoffeesBoxContainer>
      <Coffee>
        <img src={coffeeImage} alt="" />

        <div>
          <h3>Expresso Tradicional</h3>
          <CoffeeActions>
            <Counter />
            <CoffeeButton type="button">
              <Trash /> <span>Remover</span>
            </CoffeeButton>
          </CoffeeActions>
        </div>

        <CoffeePrice>R$ 9,90</CoffeePrice>
      </Coffee>

      <Total>
        <TotalTextWrapper>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </TotalTextWrapper>

        <TotalTextWrapper>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </TotalTextWrapper>

        <TotalTextWrapper>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </TotalTextWrapper>
      </Total>

      <ButtonSubmit type="submit" variant="primary">
        Confirmar Pedido
      </ButtonSubmit>
    </CoffeesBoxContainer>
  )
}
