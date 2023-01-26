import { Heading } from '../../components/Heading'

import { AddressBox } from './components/AddressBox'
import { PaymentBox } from './components/PaymentBox'
import { CoffeesBox } from './components/CoffeesBox'

import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer as="main">
      <form>
        <div>
          <Heading fontSize="lg">Complete seu pedido</Heading>
          <AddressBox />
          <PaymentBox />
        </div>

        <div>
          <Heading fontSize="lg">Cafés selecionados</Heading>
          <CoffeesBox />
        </div>
      </form>
    </CheckoutContainer>
  )
}
