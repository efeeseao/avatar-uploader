import React from 'react'

import { ColorProps } from '../../utils/color'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'text' | 'contained'
} & ColorProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'text',
  textColor = 'primary',
  bg = 'primary',
  ...moreProps
}: ButtonProps) => (
  <S.Wrapper
    data-testid="button"
    variant={variant}
    textColor={textColor}
    bg={bg}
    {...moreProps}
  >
    {children}
  </S.Wrapper>
)

export default Button
