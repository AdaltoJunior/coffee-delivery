import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
`

interface FilterTagProps {
  active?: boolean
}

export const FilterTag = styled.label<FilterTagProps>`
  color: ${({ theme }) => theme.colors.primary700};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.colors.primary500};
  border-radius: 999px;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  ${({ active, theme }) =>
    active && `background-color: ${theme.colors.primary100}`};

  input {
    display: none;
  }
`
