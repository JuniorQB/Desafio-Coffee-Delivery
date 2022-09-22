import { HeaderContainer, LogoImg, InfoCart } from './styles'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { quantityItems, order } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <LogoImg>
          <img src={Logo} alt="" />
        </LogoImg>
      </NavLink>
      <InfoCart>
        <span>
          <MapPin weight="fill" /> Porto Alegre, RS
        </span>
        <NavLink to="/Checkout" title="checkout">
          <span>
            <ShoppingCart weight="fill" />
            <span>{quantityItems}</span>
          </span>
        </NavLink>
      </InfoCart>
    </HeaderContainer>
  )
}
