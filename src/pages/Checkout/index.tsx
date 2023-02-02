import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useCart } from '../../hooks/useCart'

import { Heading } from '../../components/Heading'
import { AddressBox } from './components/AddressBox'
import { PaymentBox } from './components/PaymentBox'
import { CoffeesBox } from './components/CoffeesBox'

import { CheckoutContainer } from './styles'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string({ required_error: 'Informe o cep' }).min(1, 'Informe o cep'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().regex(/[a-zA-Z]{2}/, 'Inválido'),
  pagamento: zod.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      pagamento: 'Cartão de Crédito',
    },
  })

  const navigate = useNavigate()
  const { emptyCart } = useCart()

  function handleChekoutFormSubmit(formData: CheckoutFormData) {
    navigate('/success', { state: formData })
    emptyCart()
  }

  return (
    <CheckoutContainer as="main">
      <FormProvider {...checkoutForm}>
        <form onSubmit={checkoutForm.handleSubmit(handleChekoutFormSubmit)}>
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
      </FormProvider>
    </CheckoutContainer>
  )
}
