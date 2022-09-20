import styled from 'styled-components'

export const ItemContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  height: 19.375rem;
  border-radius: 8px 32px 8px 32px;
  margin-top: 50px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  img {
    margin-top: -25px;
  }
`

export const CategoriesItem = styled.div`
  display: flex;
`
export const CategoryItem = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;

  + div {
    margin-left: 0.25rem;
  }
`
export const TitleCategory = styled.div`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtile']};
`
export const DescriptionCategory = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`
export const FooterItem = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    color: ${(props) => props.theme['base-subtile']};
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    span {
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-weight: 400;
      padding-right: 0.25rem;
    }
  }

  div:last-child {
    display: flex;

    gap: 0.5rem;
    div {
      width: 72px;
      height: 38px;
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
    }
    button {
      cursor: pointer;
      width: 15px;
      background-color: ${(props) => props.theme['purple-dark']};
      border: none;
      width: 38px;
      height: 38px;
      border-radius: 8px;
      svg {
        color: ${(props) => props.theme.white};
        width: 22px;
        height: 22px;
      }
    }
  }
`
