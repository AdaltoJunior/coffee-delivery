import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  value: number
  onPlusClick: () => void
  onMinusClick: () => void
}

export function Counter({ value, onPlusClick, onMinusClick }: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={onMinusClick}>
        <Minus size={14} weight="fill" />
      </button>

      <span>{value}</span>

      <button type="button">
        <Plus size={14} weight="fill" onClick={onPlusClick} />
      </button>
    </CounterContainer>
  )
}
