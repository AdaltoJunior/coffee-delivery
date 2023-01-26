import { Link, useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import logoImage from '../../assets/logo.svg'

import {
  Actions,
  CartButton,
  Location,
  LocationText,
  NavbarContainer,
} from './styles'

export function Navbar() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <NavbarContainer as="nav">
      <Link to="/">
        <img src={logoImage} alt="" />
      </Link>

      <Actions>
        <Location>
          <MapPin size={22} weight="fill" color={theme.colors.secondary500} />
          <LocationText>Porto Alegre, RS</LocationText>
        </Location>

        <CartButton
          iconButton
          variant="primary-light"
          onClick={() => navigate('/checkout')}
        >
          <ShoppingCart size="1.375rem" weight="fill" />
        </CartButton>
      </Actions>
    </NavbarContainer>
  )
}
