import 'styled-components'

import { defaultLayout } from '../styles/layouts/default'

type ThemeType = typeof defaultLayout

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
