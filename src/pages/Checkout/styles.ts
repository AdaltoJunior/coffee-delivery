import styled from 'styled-components'

import { Container } from '../../components/Container'

export const CheckoutContainer = styled(Container)`
  padding-block: 2.5rem;

  form {
    max-width: 40rem;
    margin-inline: auto;

    display: grid;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      max-width: initial;
      margin-inline: initial;

      grid-template-columns: minmax(min-content, 40rem) minmax(
          min-content,
          28rem
        );
    }
  }
`

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 6px;
  padding: 2.5rem;
  line-height: ${({ theme }) => theme.lineHeight.snug};

  &:not(:first-child) {
    margin-top: 0.75rem;
  }
`

export const BoxHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    flex-shrink: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 2px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`
