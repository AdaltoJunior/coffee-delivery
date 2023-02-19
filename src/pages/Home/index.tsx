import Skeleton from 'react-loading-skeleton'

import { useCoffees } from '../../hooks/useCoffees'

import { Hero } from '../../components/Hero'
import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeList, CoffeeSection, CoffeeSectionHeader } from './styles'

export function Home() {
  const { coffees, isLoading } = useCoffees()

  return (
    <main>
      <Hero />

      <CoffeeSection>
        <Container>
          <CoffeeSectionHeader>
            <Heading fontWeight="extraBold">Nossos cafés</Heading>
          </CoffeeSectionHeader>

          <CoffeeList>
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    height="300px"
                    style={{ borderRadius: '6px 36px' }}
                  />
                ))
              : coffees.map((coffee) => (
                  <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
          </CoffeeList>
        </Container>
      </CoffeeSection>
    </main>
  )
}
