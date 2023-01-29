import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, optional = false, error, ...props }, ref) => (
    <InputContainer className={className}>
      <StyledInput hasError={!!error}>
        <input ref={ref} {...props} />
        {optional && <span>Opcional</span>}
      </StyledInput>
      {error && <p>{error}</p>}
    </InputContainer>
  ),
)

Input.displayName = 'Input'
