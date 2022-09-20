import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
`

export const InternalLayoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
