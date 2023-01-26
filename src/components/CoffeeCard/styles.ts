import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;
  text-align: center;
`

export const CardHeader = styled.div`
  margin-bottom: 1rem;
`

export const CoffeeImage = styled.img`
  margin-top: -2.5rem;
  margin-inline: auto;
  width: 7.5rem;
  height: 7.5rem;
  object-fit: contain;
`

export const TagsContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.colors.primary700};
  background-color: ${({ theme }) => theme.colors.primary100};
  padding: 4px 8px;
  border-radius: 999px;

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  text-transform: uppercase;
  line-height: normal;
`

export const CardBody = styled.div`
  margin-bottom: 2rem;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Price = styled.div`
  white-space: nowrap;
  line-height: ${({ theme }) => theme.lineHeight.snug};

  small {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  span {
    font-family: ${({ theme }) => theme.fontFamily.heading};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`
