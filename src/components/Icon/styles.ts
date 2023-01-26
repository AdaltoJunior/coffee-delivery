import styled from 'styled-components'

export type IconVariantType = 'primary' | 'primary-dark' | 'secondary'

interface IconContainerProps {
  variant?: IconVariantType
}

export const IconContainer = styled.div<IconContainerProps>`
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.white};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray600};

  ${({ variant, theme }) =>
    variant === 'primary' && `background-color: ${theme.colors.primary500}`}

  ${({ variant, theme }) =>
    variant === 'primary-dark' &&
    `background-color: ${theme.colors.primary700}`}

  ${({ variant, theme }) =>
    variant === 'secondary' && `background-color: ${theme.colors.secondary500}`}
`
