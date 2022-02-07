import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'

type Props = {
  children: React.ReactNode
}

const ThemeProviderComponent = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
