import { FilterContainer, FilterTag } from './styles'

interface FilterProps {
  data: { id: number; title: string }[]
}

export function Filter({ data }: FilterProps) {
  return (
    <FilterContainer type="multiple">
      {data.map((item) => (
        <FilterTag key={item.id} value={`${item.id}`}>
          {item.title}
        </FilterTag>
      ))}
    </FilterContainer>
  )
}
