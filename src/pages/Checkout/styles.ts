import styled from 'styled-components'

interface InputProps {
  size: number
}

export const ContainerCheckout = styled.div`
  display: flex;
`

export const Title = styled.div`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtile']};
`

export const LeftCheckout = styled.div``

export const FormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  form {
    margin-top: 2rem;
  }
`
export const DescriptionForm = styled.div`
  display: flex;

  color: ${(props) => props.theme['base-subtile']};

  svg {
    height: 1.375rem;
    width: 1.375rem;
    color: ${(props) => props.theme['yellow-dark']};
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

  + input {
    margin-left: 0.75rem;
  }
`
