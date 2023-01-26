import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button type="button">
        <Minus size={14} weight="fill" />
      </button>

      <span>1</span>

      <button type="button">
        <Plus size={14} weight="fill" />
      </button>
    </CounterContainer>
  )
}
