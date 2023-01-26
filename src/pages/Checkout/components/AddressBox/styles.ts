import styled from 'styled-components'
import { Box } from '../../styles'

export const AddressBoxContainer = styled(Box)``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0.75rem;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
  }

  & > * {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.screens.sm}) {
      max-width: 12.5rem;
    }
  }

  & > .fill {
    max-width: initial;
  }

  & > .small {
    @media (min-width: ${({ theme }) => theme.screens.sm}) {
      max-width: 3.75rem;
    }
  }
`
