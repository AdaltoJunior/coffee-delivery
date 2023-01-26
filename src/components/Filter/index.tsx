import { useState } from 'react'
import { FilterContainer, FilterTag } from './styles'

const categories = [
  { id: 1, name: 'Tradicional' },
  { id: 2, name: 'Especial' },
  { id: 3, name: 'Com leite' },
  { id: 4, name: 'Acoólico' },
  { id: 5, name: 'Gelado' },
]

export function Filter() {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  function handleTagChange(idToFilter: number) {
    const isSelected = selectedIds.some((id) => id === idToFilter)

    if (!isSelected) {
      return setSelectedIds([...selectedIds, idToFilter])
    }

    setSelectedIds(selectedIds.filter((id) => id !== idToFilter))
  }

  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterTag
          key={category.id}
          onChange={() => handleTagChange(category.id)}
          active={selectedIds.some((id) => id === category.id)}
        >
          <span>{category.name}</span>
          <input type="checkbox" />
        </FilterTag>
      ))}
    </FilterContainer>
  )
}
