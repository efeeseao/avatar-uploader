import styled, { css } from 'styled-components'

import { color } from '../../utils/color'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    border: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
    ${variant === 'text'
      ? css`
          ${color(theme.colors)}
          background: none;
        `
      : ''}
    ${variant === 'contained'
      ? css`
          ${color(theme.colors)}
          padding: 4px 16px;
          border-radius: 16px;
        `
      : ''}
  `}
`
