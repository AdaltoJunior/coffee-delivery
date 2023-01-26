import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Box } from '../../styles'

export const PaymentBoxContainer = styled(Box)``

export const Methods = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
  gap: 0.75rem;
`

export const MethodButton = styled(RadioGroup.Item)`
  background-color: ${({ theme }) => theme.colors.gray300};
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  gap: 0.75rem;

  transition: background-color 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.secondary100};
    border-color: ${({ theme }) => theme.colors.secondary500};
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.secondary500};
    font-size: 1rem;
  }
`
