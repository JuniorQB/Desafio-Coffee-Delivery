import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  ContainerCheckout,
  LeftCheckout,
  Title,
  FormContainer,
  DescriptionForm,
  InputGroup,
  Input,
  PaymentMethod,
  RigghtChekout,
  CoffeCard,
  Itens,
  ItemCheckout,
  DivButtons,
  ButtonItemCheckout,
  ButtonItemCheckoutRemove,
  PriceCheckout,
  TotalOrder,
  TotalOrderDiv,
} from './styles'

export function Checkout() {
  return (
    <ContainerCheckout>
      <LeftCheckout>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <DescriptionForm statusColor="yellowDark">
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
        <FormContainer>
          <DescriptionForm statusColor="purpleDark">
            <CurrencyDollar />
            <div>
              <strong>Pagamento </strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </DescriptionForm>
          <PaymentMethod>
            <button>
              <CreditCard />
              Cartão de Crédito
            </button>
            <button>
              <Bank />
              Cartão de Débito
            </button>
            <button>
              <Money />
              Dinheiro
            </button>
          </PaymentMethod>
        </FormContainer>
      </LeftCheckout>
      <RigghtChekout>
        <Title>Cafés Selecionados</Title>
        <CoffeCard>
          <Itens>
            <ItemCheckout>
              <div>
                <img src="/imagens/expressotradicional.svg" alt="" />

                <div>
                  <span>Expresso tradicional</span>
                  <DivButtons>
                    <ButtonItemCheckout>
                      <button>
                        <Minus />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus />
                      </button>
                    </ButtonItemCheckout>
                    <ButtonItemCheckoutRemove>
                      <Trash />
                      Remover
                    </ButtonItemCheckoutRemove>
                  </DivButtons>
                </div>
              </div>
              <PriceCheckout>R$ 9,90</PriceCheckout>
            </ItemCheckout>
            <ItemCheckout>
              <div>
                <img src="/imagens/expressotradicional.svg" alt="" />

                <div>
                  <span>Expresso tradicional</span>
                  <DivButtons>
                    <ButtonItemCheckout>
                      <button>
                        <Minus />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus />
                      </button>
                    </ButtonItemCheckout>
                    <ButtonItemCheckoutRemove>
                      <Trash />
                      Remover
                    </ButtonItemCheckoutRemove>
                  </DivButtons>
                </div>
              </div>
              <PriceCheckout>R$ 9,90</PriceCheckout>
            </ItemCheckout>
          </Itens>
          <TotalOrder>
            <TotalOrderDiv>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </TotalOrderDiv>
            <TotalOrderDiv>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </TotalOrderDiv>
            <TotalOrderDiv grandTotal>
              <span>Total</span>
              <span>R$ 32,50</span>
            </TotalOrderDiv>
            <NavLink to="/" title="Home">
              Confirmar Pedido
            </NavLink>
          </TotalOrder>
        </CoffeCard>
      </RigghtChekout>
    </ContainerCheckout>
  )
}
