import { useTheme } from 'styled-components'
import { useFormContext, Controller } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { CheckoutFormData } from '../..'

import { BoxHeader } from '../../styles'
import { PaymentBoxContainer, MethodButton, Methods } from './styles'

export function PaymentBox() {
  const { control } = useFormContext<CheckoutFormData>()
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

      <Controller
        control={control}
        name="pagamento"
        render={({ field }) => (
          <Methods onValueChange={field.onChange} value={field.value}>
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
        )}
      />
    </PaymentBoxContainer>
  )
}
