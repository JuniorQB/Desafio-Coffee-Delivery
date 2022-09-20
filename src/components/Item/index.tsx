import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { princeNumberToString } from '../../utils/convertPrice'
import {
  ItemContainer,
  CategoriesItem,
  CategoryItem,
  TitleCategory,
  DescriptionCategory,
  FooterItem,
} from './styles'

export interface ItemProps {
  id: number
  imgUrl: string
  categoryItem: string[] | undefined
  title: string
  description: string
  price: number
}

export function Item(props: ItemProps) {
  const { coffeeOrder } = useContext(OrderContext)
  const [quantity, setQuantity] = useState(1)

  function sumItemQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseItemQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function handleCoffeOrder() {
    coffeeOrder({
      idCoffe: props.id,
      price: props.price,
      quantity,
    })
  }
  return (
    <ItemContainer>
      <img src={props.imgUrl} alt="" /> <a href="#"></a>
      <CategoriesItem>
        {props.categoryItem?.map((data, i) => {
          return <CategoryItem key={i}>{data}</CategoryItem>
        })}
      </CategoriesItem>
      <TitleCategory>{props.title}</TitleCategory>
      <DescriptionCategory>{props.description}</DescriptionCategory>
      <FooterItem>
        <div>
          <span>R$</span>
          {princeNumberToString(props.price)}
        </div>
        <div>
          <div>
            <button onClick={decreaseItemQuantity}>
              <Minus />
            </button>
            <span>{quantity}</span>
            <button onClick={sumItemQuantity}>
              <Plus />
            </button>
          </div>
          <button onClick={handleCoffeOrder}>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </FooterItem>
    </ItemContainer>
  )
}
