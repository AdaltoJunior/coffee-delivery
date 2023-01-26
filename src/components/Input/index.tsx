import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <InputContainer className={className}>
      <input {...props} />
      {!props.required && <span>Opcional</span>}
    </InputContainer>
  )
}
