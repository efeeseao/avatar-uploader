import React from 'react'
import { BorderProps, LayoutProps, SpaceProps } from 'styled-system'

import { ColorProps } from '../../utils/color'
import * as S from './styles'

export type ContainerProps = {
  children?: React.ReactNode
} & BorderProps &
  LayoutProps &
  SpaceProps &
  ColorProps

const Container = ({
  children,
  textColor = 'black',
  bg = 'background',
  p = 16,
  ...moreProps
}: ContainerProps) => (
  <S.Wrapper
    data-testid="container"
    textColor={textColor}
    bg={bg}
    p={p}
    {...moreProps}
  >
    {children}
  </S.Wrapper>
)

export default Container
