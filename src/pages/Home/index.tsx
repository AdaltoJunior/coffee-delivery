import { Hero } from '../../components/Hero'
import { Filter } from '../../components/Filter'
import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeList, CoffeeSection, CoffeeSectionHeader } from './styles'

export function Home() {
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
            {Array.from({ length: 14 }).map((_, index) => (
              <CoffeeCard key={index} />
            ))}
          </CoffeeList>
        </Container>
      </CoffeeSection>
    </main>
  )
}
