import styled from 'styled-components'

export const OrderCompletionContatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const OrderCompletionLeft = styled.div``

export const Title = styled.div`
  line-height: 1;
  font-family: 'Baloo 2';
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`

export const AdditionalInformation = styled.div`
  padding: 2.5rem;
  position: relative;
  gap: 2rem;
  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px 36px 6px 36px;
    border: 3px solid transparent;
    background: linear-gradient(to right, #dbac2c, #8047f8) border-box;
    -webkit-mask: linear-gradient(#dbac2c 0 0) padding-box,
      linear-gradient(#8047f8 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  width: 526px;
  height: 270px;
  margin-bottom: 1rem;
`

interface AdditionalInformationItemProps {
  background: 'purple' | 'yellow' | 'yellow-dark'
}

export const AdditionalInformationItem = styled.div<AdditionalInformationItemProps>`
  display: flex;
  gap: 0.75rem;
  span:first-child {
    background-color: ${(props) => props.theme[props.background]};
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    svg {
      width: 16px;
      height: 16px;
      color: ${(props) => props.theme.white};
    }
  }
  color: ${(props) => props.theme['base-text']};
`
export const DivImage = styled.div`
  margin: 0;
`
