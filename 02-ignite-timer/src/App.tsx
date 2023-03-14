import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hello World</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
