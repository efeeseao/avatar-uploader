import styled, { css } from 'styled-components'
import { typography } from 'styled-system'
import { color } from '../../utils/color'

export const Wrapper = styled.span`
  ${() => css`
    ${color}
    ${typography}
  `}
`
