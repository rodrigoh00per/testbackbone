import { ThemeProvider } from 'styled-components'
import theme from './Theme.utils'
import React from 'react'

interface ThemeProps {
  children: React.ReactNode
}
const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
