import {
  OrderCompletionContatiner,
  OrderCompletionLeft,
  Title,
  SubTitle,
  AdditionalInformation,
  AdditionalInformationItem,
  DivImage,
} from './styles'

import imgMoto from '../../assets/imagens/imgMoto.png'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

export function OrderCompletion() {
  return (
    <OrderCompletionContatiner>
      <OrderCompletionLeft>
        <Title>Uhu! Pedido Confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
        <AdditionalInformation>
          <AdditionalInformationItem background="purple">
            <span>
              <MapPin weight="fill" />
            </span>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre - RS
            </span>
          </AdditionalInformationItem>
          <AdditionalInformationItem background="yellow">
            <span>
              <Clock weight="fill" />
            </span>
            <span>
              Previsão de Entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </AdditionalInformationItem>
          <AdditionalInformationItem background="yellow-dark">
            <span>
              <CurrencyDollar />
            </span>
            <span>
              Pagamento na Entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </AdditionalInformationItem>
        </AdditionalInformation>
      </OrderCompletionLeft>
      <DivImage>
        <img src={imgMoto} alt="" />
      </DivImage>
    </OrderCompletionContatiner>
  )
}
