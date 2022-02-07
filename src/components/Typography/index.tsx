import React, { useMemo } from 'react'
import { TypographyProps } from 'styled-system'

import { ColorProps } from '../../utils/color'
import * as S from './styles'

export type TypographyComponentProps = {
  children: React.ReactNode
  variant?: 'title' | 'text' | 'error'
} & ColorProps &
  TypographyProps

const typographyVariantProps: {
  [key in NonNullable<TypographyComponentProps['variant']>]: TypographyProps &
    ColorProps
} = {
  title: {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '25.2px'
  },

  text: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '25.2px'
  },

  error: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '28.8px',
    textColor: 'error'
  }
}

const Typography = ({ variant, ...moreProps }: TypographyComponentProps) => {
  const TypographyComponentProps = useMemo<ColorProps & TypographyProps>(() => {
    return variant ? typographyVariantProps[variant] : {}
  }, [variant])

  return (
    <S.Wrapper
      data-testid="typography"
      {...{ variant }}
      {...TypographyComponentProps}
      {...moreProps}
    />
  )
}

export default Typography
