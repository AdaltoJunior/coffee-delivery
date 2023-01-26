import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Icon } from '../Icon'
import { Container } from '../../components/Container'

import coffeeImage from '../../assets/intro-coffee.png'

import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroItems,
  HeroSubtitle,
  HeroTitleContainer,
  HeroImage,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <Container>
        <HeroContent>
          <div>
            <HeroTitleContainer>
              <HeroTitle>
                Encontre o café perfeito para qualquer hora do dia
              </HeroTitle>

              <HeroSubtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </HeroSubtitle>
            </HeroTitleContainer>

            <HeroItems>
              <ul>
                <li>
                  <Icon
                    icon={ShoppingCart}
                    weight="fill"
                    variant="primary-dark"
                  />
                  <span>Compra simples e segura</span>
                </li>
                <li>
                  <Icon icon={Timer} weight="fill" variant="primary" />
                  <span>Entrega rápida e rastreada</span>
                </li>
              </ul>
              <ul>
                <li>
                  <Icon icon={Package} weight="fill" />
                  <span>Embalagem mantém o café intacto</span>
                </li>
                <li>
                  <Icon icon={Coffee} weight="fill" variant="secondary" />
                  <span>O café chega fresquinho até você</span>
                </li>
              </ul>
            </HeroItems>
          </div>

          <div>
            <HeroImage src={coffeeImage} alt="" />
          </div>
        </HeroContent>
      </Container>
    </HeroContainer>
  )
}
