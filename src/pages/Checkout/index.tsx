import { MapPinLine } from 'phosphor-react'
import {
  ContainerCheckout,
  LeftCheckout,
  Title,
  FormContainer,
  DescriptionForm,
  InputGroup,
  Input,
} from './styles'

export function Checkout() {
  return (
    <ContainerCheckout>
      <LeftCheckout>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <DescriptionForm>
            <MapPinLine />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </DescriptionForm>

          <form>
            <InputGroup>
              <Input name="cep" id="cep" placeholder="CEP" size={12.5} />
            </InputGroup>
            <InputGroup>
              <Input name="street" id="street" placeholder="Rua" size={35} />
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                name="number"
                id="number"
                placeholder="Número"
                size={12.5}
              />
              <Input
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento (Opcional)"
                size={21.75}
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                name="district"
                id="distric"
                placeholder="Bairro"
                size={12.5}
              />

              <Input name="city" id="city" placeholder="Cidade" size={17.25} />
              <Input name="uf" id="uf" placeholder="UF" size={3.75} />
            </InputGroup>
          </form>
        </FormContainer>
        <div>Modulo de pagamento</div>
      </LeftCheckout>

      <Title>Descrição do pedido</Title>
    </ContainerCheckout>
  )
}
