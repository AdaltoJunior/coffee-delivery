import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Input } from '../../../../components/Input'

import { BoxHeader } from '../../styles'
import { InputContainer, InputRow, AddressBoxContainer } from './styles'

export function AddressBox() {
  const theme = useTheme()

  return (
    <AddressBoxContainer>
      <BoxHeader>
        <MapPinLine size="1.375rem" color={theme.colors.primary700} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </BoxHeader>

      <InputContainer>
        <InputRow>
          <Input type="text" placeholder="CEP" required />
        </InputRow>

        <InputRow>
          <Input className="fill" type="text" placeholder="Rua" required />
        </InputRow>

        <InputRow>
          <Input type="text" placeholder="Número" required />
          <Input className="fill" type="text" placeholder="Complemento" />
        </InputRow>

        <InputRow>
          <Input type="text" placeholder="Bairro" required />
          <Input className="fill" type="text" placeholder="Cidade" required />
          <Input
            className="small"
            type="text"
            placeholder="UF"
            required
            maxLength={2}
          />
        </InputRow>
      </InputContainer>
    </AddressBoxContainer>
  )
}
