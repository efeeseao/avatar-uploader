import React from 'react'
import { FlexboxProps, SpaceProps, LayoutProps } from 'styled-system'

import * as S from './styles'

export type MainProps = {
  children: React.ReactNode
} & LayoutProps &
  FlexboxProps &
  SpaceProps

const Main = ({ children, ...moreProps }: MainProps) => (
  <S.Wrapper {...moreProps}>{children}</S.Wrapper>
)

export default Main
