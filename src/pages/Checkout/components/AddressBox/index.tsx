import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Input } from '../../../../components/Input'

import { BoxHeader } from '../../styles'
import { InputContainer, InputRow, AddressBoxContainer } from './styles'

import { CheckoutFormData } from '../..'

export function AddressBox() {
  const theme = useTheme()
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

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
          <Input
            type="text"
            placeholder="CEP"
            {...register('cep')}
            error={errors.cep?.message}
          />
        </InputRow>

        <InputRow>
          <Input
            className="fill"
            type="text"
            placeholder="Rua"
            {...register('rua')}
            error={errors.rua?.message}
          />
        </InputRow>

        <InputRow>
          <Input
            type="text"
            placeholder="Número"
            {...register('numero')}
            error={errors.numero?.message}
          />
          <Input
            className="fill"
            type="text"
            placeholder="Complemento"
            optional
            {...register('complemento')}
            error={errors.complemento?.message}
          />
        </InputRow>

        <InputRow>
          <Input
            type="text"
            placeholder="Bairro"
            {...register('bairro')}
            error={errors.bairro?.message}
          />
          <Input
            className="fill"
            type="text"
            placeholder="Cidade"
            {...register('cidade')}
            error={errors.cidade?.message}
          />
          <Input
            className="small"
            type="text"
            maxLength={2}
            placeholder="UF"
            {...register('uf')}
            error={errors.uf?.message}
          />
        </InputRow>
      </InputContainer>
    </AddressBoxContainer>
  )
}
