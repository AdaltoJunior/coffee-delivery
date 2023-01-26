import styled from 'styled-components'
import { Heading } from '../../components/Heading'

export const SuccessContainer = styled.main`
  padding-block: 2.5rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding-block: 5rem;
  }
`

export const HeadingContainer = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    text-align: start;
  }

  ${Heading} {
    color: ${({ theme }) => theme.colors.primary700};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    font-weight: 800;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: ${({ theme }) => theme.lineHeight.snug};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem 1.5rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  width: 100%;
  max-width: 32.875rem;

  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px 36px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(
      102.89deg,
      ${({ theme }) => theme.colors.primary500} 2.61%,
      ${({ theme }) => theme.colors.secondary500} 98.76%
    );
    border-radius: 7px 37px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  line-height: ${({ theme }) => theme.lineHeight.snug};
`
