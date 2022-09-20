import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const LogoImg = styled.div`
  img {
    width: 5.309rem;
    height: 2.5rem;
  }
`
export const InfoCart = styled.div`
  display: flex;
  align-items: center;
  width: 12.06rem;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['purple-dark']};
    font-weight: 400;
    font-size: 0.875rem;
    background: ${(props) => props.theme['purple-light']};
    padding: 8px;
    gap: 4px;
    border-radius: 6px;
    svg {
      height: 1.375rem;
      width: 1.375rem;
      fill: ${(props) => props.theme['purple-dark']};
    }
  }
  span:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['yellow-light']};
    padding: 8px;
    border-radius: 6px;
    svg {
      height: 1.375rem;
      width: 1.375rem;
      fill: ${(props) => props.theme['yellow-dark']};
    }
    span {
      width: 1.25rem;
      height: 1.25rem;
      background: ${(props) => props.theme['yellow-dark']};
      padding: 5px;
      font-size: 0.75rem;
      border-radius: 50%;
      margin-top: -33px;
      margin-right: -37px;
      position: absolute;
      color: ${(props) => props.theme.white};
    }
  }
`
