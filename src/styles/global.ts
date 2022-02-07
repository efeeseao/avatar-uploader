import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyle: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      background: ${theme.colors.background};
      color: ${theme.colors.black};
      height: 1.2;
      font-weight: 400;
    `}
  }
`
export default GlobalStyle
