import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const FilterContainer = styled(ToggleGroup.Root)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
`

export const FilterTag = styled(ToggleGroup.Item)`
  color: ${({ theme }) => theme.colors.primary700};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.colors.primary500};
  border-radius: 999px;
  padding: 0.375rem 0.75rem;

  &[data-state='on'] {
    background-color: ${({ theme }) => theme.colors.primary100};
  }
`
