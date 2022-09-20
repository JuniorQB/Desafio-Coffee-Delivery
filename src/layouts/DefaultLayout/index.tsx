import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { InternalLayoutContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <InternalLayoutContainer>
        <Header />
        <Outlet />
      </InternalLayoutContainer>
    </LayoutContainer>
  )
}
