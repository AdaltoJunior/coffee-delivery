import { FilterContainer, FilterTag } from './styles'

const categories = [
  { id: 1, name: 'Tradicional' },
  { id: 2, name: 'Especial' },
  { id: 3, name: 'Com leite' },
  { id: 4, name: 'Acoólico' },
  { id: 5, name: 'Gelado' },
]

export function Filter() {
  return (
    <FilterContainer type="multiple">
      {categories.map((category) => (
        <FilterTag key={category.id} value={`${category.id}`}>
          {category.name}
        </FilterTag>
      ))}
    </FilterContainer>
  )
}
