import styled from 'styled-components'

interface InputProps {
  size: number
}

interface TotalProps {
  grandTotal?: boolean
}

export const ContainerCheckout = styled.div`
  display: flex;
`

export const Title = styled.div`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtile']};
  margin-bottom: 1rem;
`

export const LeftCheckout = styled.div``

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  form {
    margin-top: 2rem;
  }

  + div {
    margin-top: 0.75rem;
  }
`

const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  purpleDark: 'purple-dark',
} as const

interface SvgProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const DescriptionForm = styled.div<SvgProps>`
  display: flex;

  color: ${(props) => props.theme['base-subtile']};

  svg {
    height: 1.375rem;
    width: 1.375rem;
    color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    margin-right: 0.5rem;
  }

  div {
    strong {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    span {
      font-size: 0.875rem;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  + div {
    margin-top: 1rem;
  }
`

export const Input = styled.input<InputProps>`
  height: 2.625rem;
  width: ${(props) => `${props.size}rem`};
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  padding-left: 0.75rem;

  &:focus {
    box-shadow: none;
    //border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    //color: ${(props) => props.theme['gray-500']};
  }

  + input {
    margin-left: 0.75rem;
  }
`

export const PaymentMethod = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    cursor: pointer;
    height: 3.1875rem;
    width: 11.125rem;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['base-button']};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-subtile']};

    + button {
      margin-left: 0.75rem;
    }
    svg {
      color: ${(props) => props.theme['purple-dark']};
      height: 1rem;
      width: 1rem;
      margin-right: 0.75rem;
    }
  }
`
export const RigghtChekout = styled.div`
  margin-left: 2rem;
`

export const CoffeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 31.125rem;
  border-radius: 8px 32px 8px 32px;
  padding: 2.5rem;
`
export const Itens = styled.div`
  width: 100%;
`

export const ItemCheckout = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
  + div {
    margin-top: 1.5rem;
  }
  div:first-child {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.25rem;
    }
  }
`
export const DivButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const ButtonItemCheckout = styled.div`
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: 8px;
  span {
    font-size: 1rem;
    text-align: center;
    padding-bottom: 0.3rem;
    width: 50%;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
  }
  button {
    svg {
      color: ${(props) => props.theme['purple-dark']};
      width: 1rem;
    }
    width: 25%;
    cursor: pointer;
    font-size: 1rem;
    border: none;
    background: transparent;
  }
`

export const ButtonItemCheckoutRemove = styled.button`
  gap: 0.25rem;
  svg {
    color: ${(props) => props.theme['purple-dark']};
    width: 1rem;
  }

  cursor: pointer;
  font-size: 0.75rem;
  border: none;
  background: ${(props) => props.theme['base-button']};
  width: 91px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-transform: uppercase;
`
export const PriceCheckout = styled.div`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtile']};
`

export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-subtile']};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 6px;
    border: 0px;
    background: ${(props) => props.theme.yellow};
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 900;
    height: 46px;
    width: 100%;
    transition: 0.3s background-color;
  }

  a:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const TotalOrderDiv = styled.div<TotalProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ;
  ${(props) =>
    props.grandTotal &&
    `
    font-size: 1.5rem;
    font-weight: 900;
  `}
`
