import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultLayout } from './styles/layouts/default'

export function App() {
  return (
    <ThemeProvider theme={defaultLayout}>
      <GlobalStyle />
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
