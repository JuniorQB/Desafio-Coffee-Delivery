import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  HomeBannerLeft,
  HomeBannerRight,
  ItensBannerLeft,
  ItensBannerLeftChild,
  HomeHeaderContainer,
  ItensContainer,
} from './styles'

import ImgCoffee from '../../assets/imagens/cafe.svg'
import { Item } from '../../components/Item'

import { COFFEE } from '../../utils/coffe'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <HomeBannerLeft>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <ItensBannerLeft>
            <ItensBannerLeftChild bgIconsColor="yellowDark">
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </ItensBannerLeftChild>
            <ItensBannerLeftChild bgIconsColor="baseTitle">
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </ItensBannerLeftChild>
            <ItensBannerLeftChild bgIconsColor="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </ItensBannerLeftChild>
            <ItensBannerLeftChild bgIconsColor="purpleDark">
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </ItensBannerLeftChild>
          </ItensBannerLeft>
        </HomeBannerLeft>
        <HomeBannerRight>
          <img src={ImgCoffee} alt="" />
        </HomeBannerRight>
      </HomeHeaderContainer>
      <ItensContainer>
        <span>Nossos Cafés</span>
        <div>
          {COFFEE &&
            COFFEE.map((data) => {
              return (
                <Item
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  categoryItem={data.categoryItem}
                  description={data.description}
                  price={data.price}
                  imgUrl={data.imgUrl}
                />
              )
            })}
        </div>
      </ItensContainer>
      <br />
      <br />
    </HomeContainer>
  )
}
