import styled from 'styled-components'
import { layout, flexbox, space } from 'styled-system'

import { MainProps } from '.'

export const Wrapper = styled.div<MainProps>`
  ${layout}
  ${flexbox}
  ${space}
`
