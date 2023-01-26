import { ComponentType } from 'react'
import { IconContainer, IconVariantType } from './styles'
import { IconProps as PhosporIconProps } from 'phosphor-react'

interface IconProps extends PhosporIconProps {
  icon: ComponentType
  variant?: IconVariantType
}

export function Icon({ icon: Icon, variant, ...props }: IconProps) {
  return (
    <IconContainer variant={variant}>
      <Icon {...props} />
    </IconContainer>
  )
}
