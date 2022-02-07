import React from 'react'
import { render } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render correctly and generate snapshot', () => {
    const { queryByTestId, container } = render(<Slider />)

    expect(queryByTestId('slider')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
