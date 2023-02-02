import { Navigate, useLocation } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CheckoutFormData } from '../Checkout'

import { Icon } from '../../components/Icon'
import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'

import successIllustration from '../../assets/success-illustration.svg'

import {
  SuccessContainer,
  HeadingContainer,
  Content,
  InfoContainer,
  Info,
} from './styles'

interface LocationData {
  state: CheckoutFormData
}

export function Success() {
  const { state } = useLocation() as LocationData

  if (!state) {
    return <Navigate to="/" />
  }

  return (
    <SuccessContainer>
      <Container>
        <HeadingContainer>
          <Heading as="h1">Uhu! Pedido confirmado</Heading>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeadingContainer>

        <Content>
          <InfoContainer>
            <Info>
              <Icon icon={MapPin} weight="fill" variant="secondary" />
              <div>
                <p>
                  Entrega em <strong>{`${state.rua}, ${state.numero}`}</strong>
                </p>
                <p>{`${state.bairro} - ${state.cidade}, ${state.uf}`}</p>
              </div>
            </Info>

            <Info>
              <Icon icon={Timer} weight="fill" variant="primary" />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </Info>

            <Info>
              <Icon
                icon={CurrencyDollar}
                weight="fill"
                variant="primary-dark"
              />
              <div>
                <p>Pagamento na entrega</p>
                <strong>{state.pagamento}</strong>
              </div>
            </Info>
          </InfoContainer>
          <div>
            <img src={successIllustration} alt="" />
          </div>
        </Content>
      </Container>
    </SuccessContainer>
  )
}
