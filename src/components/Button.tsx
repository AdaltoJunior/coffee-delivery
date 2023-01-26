import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'primary-light' | 'secondary-dark'
  iconButton?: boolean
}

export const Button = styled.button<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray300};
  transition: background-color 0.15s, transform 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }

  &:active {
    transform: translateY(3px);
  }

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary500};

      &:hover {
        background-color: ${theme.colors.primary700};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'primary-light' &&
    css`
      color: ${theme.colors.primary700};
      background-color: ${theme.colors.primary100};

      &:hover {
        background-color: ${theme.colors.primary100};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'secondary-dark' &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary700};

      &:hover {
        background-color: ${theme.colors.secondary500};
      }
    `}

    ${({ iconButton }) => iconButton && 'line-height: 0'};
`
