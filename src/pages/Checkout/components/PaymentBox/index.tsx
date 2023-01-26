import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { BoxHeader } from '../../styles'

import { PaymentBoxContainer, MethodButton, Methods } from './styles'

export function PaymentBox() {
  const theme = useTheme()

  return (
    <PaymentBoxContainer>
      <BoxHeader>
        <CurrencyDollar size="1.375rem" color={theme.colors.secondary500} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </BoxHeader>

      <Methods>
        <MethodButton value="Cartão de Crédito">
          <CreditCard /> Cartão de Crédito
        </MethodButton>

        <MethodButton value="Cartão de Débito">
          <Bank /> Cartão de Débito
        </MethodButton>

        <MethodButton value="Dinheiro">
          <Money /> Dinheiro
        </MethodButton>
      </Methods>
    </PaymentBoxContainer>
  )
}
