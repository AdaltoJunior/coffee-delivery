import { useFormContext, Controller } from 'react-hook-form'
import { useIMask, IMask } from 'react-imask'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Input } from '../../../../components/Input'

import { BoxHeader } from '../../styles'
import { InputContainer, InputRow, AddressBoxContainer } from './styles'

import { CheckoutFormData } from '../..'
import axios from 'axios'

interface MaskOptions {
  mask: string
}

interface CepResponse {
  uf: string
  bairro: string
  logradouro: string
  localidade: string
  erro: boolean
}

export function AddressBox() {
  const theme = useTheme()

  const {
    register,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

  const cepMask = useIMask({ mask: '00000-000' }, { onComplete: fetchCep })

  async function fetchCep(cep: string, maskRef: IMask.InputMask<MaskOptions>) {
    clearErrors('cep')

    const unmaskedCep = maskRef.unmaskedValue

    const response = await axios.get<CepResponse>(
      `https://viacep.com.br/ws/${unmaskedCep}/json/`,
    )

    if (response.data.erro) {
      setError('cep', { type: 'custom', message: 'CEP Inválido' })
      return
    }

    const { logradouro, bairro, localidade, uf } = response.data

    setValue('rua', logradouro)
    setValue('bairro', bairro)
    setValue('cidade', localidade)
    setValue('uf', uf)
  }

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
          <Controller
            control={control}
            name="cep"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="CEP"
                ref={cepMask.ref}
                onChange={() =>
                  field.onChange({
                    target: { value: cepMask.unmaskedValue },
                  })
                }
                error={errors.cep?.message}
              />
            )}
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
