import styled from 'styled-components'

import { Heading } from '../Heading'

import heroBgImage from '../../assets/hero-bg.svg'

export const HeroContainer = styled.header`
  background: url(${heroBgImage}) no-repeat center center / cover;
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 600px);
  justify-items: center;
  justify-content: center;
  row-gap: 3.5rem;
  padding-block: 2rem;

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-template-columns: minmax(min-content, 600px) minmax(0, 470px);
    justify-content: space-between;
    padding-block: 6.25rem;
  }
`

export const HeroTitleContainer = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    text-align: initial;
  }
`

export const HeroTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 800;
  margin-bottom: 1rem;
`

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const HeroItems = styled.div`
  max-width: max-content;
  margin-top: 3.5rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    margin-inline: initial;
    margin-top: 4.125rem;
  }

  ul {
    list-style: none;
  }

  li {
    line-height: ${({ theme }) => theme.lineHeight.snug};

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:not(:first-child) {
      margin-top: 1.625rem;
    }
  }
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 29.75rem;
`
