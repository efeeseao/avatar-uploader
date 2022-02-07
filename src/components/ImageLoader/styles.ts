import styled, { css } from 'styled-components'
import { border, layout, space } from 'styled-system'

import { ImageLoaderProps } from '.'

export const Wrapper = styled.div<ImageLoaderProps>`
  ${() => css`
    ${border}
    ${layout}
    ${space}
  `}
`
