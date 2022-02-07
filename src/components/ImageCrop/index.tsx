import React from 'react'
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'

import * as S from './styles'

export type ImageCropProps = {
  children?: React.ReactNode
} & LayoutProps &
  PositionProps &
  SpaceProps

const ImageCrop = ({ ...moreProps }: ImageCropProps) => (
  <S.Wrapper {...moreProps} />
)

export default ImageCrop
