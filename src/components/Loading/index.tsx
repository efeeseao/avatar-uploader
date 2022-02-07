import React from 'react'
import { LayoutProps } from 'styled-system'

import { ColorProps } from '../../utils/color'

import * as S from './styles'

export type LoadingProps = {
  progress: number
  maxProgress: number
} & ColorProps &
  Omit<LayoutProps, 'height'>

const Loading = ({ maxProgress, progress, ...moreProps }: LoadingProps) => (
  <S.Wrapper data-testid="loading-wrapper" {...moreProps}>
    <S.Background data-testid="loading-background" {...moreProps} />
    <S.Progress
      data-testid="loading-progress"
      progress={progress}
      maxProgress={maxProgress}
      {...moreProps}
    />
  </S.Wrapper>
)

export default Loading
