import React from 'react'
import { BorderProps, LayoutProps, SpaceProps } from 'styled-system'

import * as S from './styles'

export type ImageLoaderProps = BorderProps & LayoutProps & SpaceProps

const ImageLoader = ({ ...moreProps }: ImageLoaderProps) => (
  <S.Wrapper {...moreProps}></S.Wrapper>
)

export default ImageLoader
