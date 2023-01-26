import styled, { css } from 'styled-components'

import { Container } from '../Container'
import { Button } from '../Button'

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 2rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary100};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const LocationText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  color: ${({ theme }) => theme.colors.secondary700};
`

interface CartButtonProps {
  itemsCount?: number
}

export const CartButton = styled(Button)<CartButtonProps>`
  position: relative;

  ${({ itemsCount, theme }) =>
    itemsCount &&
    itemsCount > 0 &&
    css`
      &::before {
        content: '${itemsCount}';

        display: flex;
        align-items: center;
        justify-content: center;

        width: 1.25rem;
        height: 1.25rem;

        color: ${theme.colors.white};
        font-size: ${theme.fontSize.xs};
        background-color: ${theme.colors.primary700};
        border-radius: 50%;

        position: absolute;
        top: 0;
        right: 0;

        transform: translate(50%, -50%);
        overflow: hidden;
      }
    `}
`
