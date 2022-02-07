import React from 'react'

import * as S from './styles'

type SliderProps = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'type'>

const Slider = ({ ...moreProps }: SliderProps) => (
  <S.Wrapper {...moreProps} type="range" data-testid="slider" />
)

export default Slider
