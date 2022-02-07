import React from 'react'

import { ColorProps } from '../../utils/color'
import * as S from './styles'

export type WrapperProps = ColorProps

const Wrapper = ({ ...moreProps }) => <S.Container {...moreProps} />

export default Wrapper
