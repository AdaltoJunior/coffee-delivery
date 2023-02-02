import styled from 'styled-components'

import { Box } from '../../styles'
import { Button } from '../../../../components/Button'

export const CoffeesBoxContainer = styled(Box)`
  border-radius: 6px 44px;
`

export const Coffee = styled.div`
  display: flex;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  padding-bottom: 1.5rem;
  margin-bottom: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    margin-right: 1.25rem;
  }

  h3 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    margin-bottom: 0.5rem;
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;

  svg {
    color: ${({ theme }) => theme.colors.secondary500};
    font-size: 1rem;
  }
`

export const CoffeePrice = styled.p`
  font-weight: 700;
  white-space: nowrap;
  margin-left: auto;
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const TotalTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
  }
`

export const ButtonSubmit = styled(Button)`
  padding: 0.75rem;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray400};
    transform: initial;
  }
`
