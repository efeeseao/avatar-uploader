import styled, { css } from 'styled-components'
import { border, layout, space } from 'styled-system'

import { color } from '../../utils/color'

import { ContainerProps } from '.'

export const Wrapper = styled.div<ContainerProps>`
  ${() => css`
    ${border}
    ${color}
    ${layout}
    ${space}
  `}
`
