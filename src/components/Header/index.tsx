import { HeaderContainer, LogoImg, InfoCart } from './styles'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { quantityItems } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <LogoImg>
        <img src={Logo} alt="" />
      </LogoImg>
      <InfoCart>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <span>
          <ShoppingCart weight="fill" />
          <span>{quantityItems}</span>
        </span>
      </InfoCart>
    </HeaderContainer>
  )
}
