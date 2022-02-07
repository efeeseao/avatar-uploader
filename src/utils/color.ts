import {
  color as ssColor,
  ColorProps as SSColorProps,
  TextColorProps,
  compose,
  system
} from 'styled-system'

export interface ColorProps extends Omit<SSColorProps, 'color'> {
  textColor?: TextColorProps['color']
}

export const color = compose(
  ssColor,
  system({
    textColor: {
      property: 'color',
      scale: 'colors'
    }
  })
)
