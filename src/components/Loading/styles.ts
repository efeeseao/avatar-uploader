import styled, { css } from 'styled-components'
import { layout } from 'styled-system'
import { color } from '../../utils/color'
import { clamp } from '../../utils/clamp'

import { LoadingProps } from '.'

export const Wrapper = styled.div`
  ${() => css`
    ${layout}
    height: 6px;
    position: relative;
  `}
`
export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    height: 100%;
    position: absolute;
  `}
`
export const Progress = styled.div<LoadingProps>`
  ${({ maxProgress, progress }) => css`
    ${color}
    width: ${clamp(
      maxProgress === 0 ? 0 : (progress / maxProgress) * 100,
      0,
      100
    )}%;
    height: 100%;
    position: absolute;
    transition: width 0.5s;
  `}
`
