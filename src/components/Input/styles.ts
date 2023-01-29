import styled from 'styled-components'

export const InputContainer = styled.div`
  p {
    color: ${({ theme }) => theme.colors.danger};
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 0.25rem;
  }
`

interface StyledInputProps {
  hasError: boolean
}

export const StyledInput = styled.label<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.gray200};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 4px;
  padding: 0.75rem;

  line-height: ${({ theme }) => theme.lineHeight.snug};
  cursor: text;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  input {
    flex: 1;

    border: none;
    background: transparent;
    outline: 0;

    min-width: 0;

    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  span {
    color: ${({ theme }) => theme.colors.gray500};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-style: italic;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary700};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  ${({ hasError, theme }) => hasError && `border-color: ${theme.colors.danger}`}
`
