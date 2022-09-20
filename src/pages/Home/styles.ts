import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`

export const HomeHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 34rem;
  padding-top: 5.75rem;
  padding-bottom: 3.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: center;
  }
`

export const HomeBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
  align-items: flex-start;
  color: ${(props) => props.theme['base-title']};
  height: 100%;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    line-height: 1;
  }
  span {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding-right: 1rem;
    gap: 0.875rem;
    padding-left: 1rem;
    text-align: center;
    h1 {
      font-size: 1.4rem;
      margin-top: 50px;
    }

    span {
      font-size: 0.875rem;
    }
  }
`

export const ItensBannerLeft = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 4.125rem;
  gap: 1.25rem 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1.125rem;
    gap: auto 2.5rem;
  }
`

const BG_ICONS_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseTitle: 'base-title',
  purpleDark: 'purple-dark',
} as const

interface BgIconsColor {
  bgIconsColor: keyof typeof BG_ICONS_COLOR
}
export const ItensBannerLeftChild = styled.div<BgIconsColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  span {
    min-width: 2rem;
    min-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.theme[BG_ICONS_COLOR[props.bgIconsColor]]};
    svg {
      width: 1.1rem;
      height: 1.1rem;
      color: ${(props) => props.theme.white};
    }
  }
`

export const HomeBannerRight = styled.div`
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 50%;
      padding-top: 30px;
    }
  }
`

export const ItensContainer = styled.div`
  margin-top: 2rem;
  > span {
    font-size: 2rem;
    font-family: 'Baloo 2';
  }

  > div {
    display: flex;
    gap: 2rem;
  }
`
