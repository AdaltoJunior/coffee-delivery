import styled from 'styled-components'

export const CoffeeSection = styled.section`
  padding: 2rem 0 8rem;
`

export const CoffeeSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-bottom: 3.375rem;

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 16rem);
  justify-content: center;
  gap: 2.5rem 2rem;
`
