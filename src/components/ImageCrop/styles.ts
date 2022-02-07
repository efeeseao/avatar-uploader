import styled, { css } from 'styled-components'
import { layout, position, space } from 'styled-system'

import { ImageCropProps } from '.'

export const Wrapper = styled.div<ImageCropProps>`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #c3cbd5;
    ${layout}
    ${position}
    ${space}
  `}
`
