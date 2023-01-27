import { useCoffees } from '../../hooks/useCoffees'

import { Hero } from '../../components/Hero'
import { Filter } from '../../components/Filter'
import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeList, CoffeeSection, CoffeeSectionHeader } from './styles'

export function Home() {
  const { coffees } = useCoffees()

  return (
    <main>
      <Hero />

      <CoffeeSection>
        <Container>
          <CoffeeSectionHeader>
            <Heading fontWeight="extraBold">Nossos cafés</Heading>
            <Filter />
          </CoffeeSectionHeader>

          <CoffeeList>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeList>
        </Container>
      </CoffeeSection>
    </main>
  )
}
