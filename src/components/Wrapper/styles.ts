import styled, { css } from 'styled-components'

import { color } from '../../utils/color'
import { WrapperProps } from '.'

export const Container = styled.div<WrapperProps>`
  ${() => css`
    ${color}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: calc(10px + 2vmin);
  `}
`
