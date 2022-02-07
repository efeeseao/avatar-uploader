import React from 'react'
import { render } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { queryByTestId, container } = render(<Container>content</Container>)
    expect(queryByTestId('container')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render snapshot with colors', () => {
    const { container } = render(<Container bg="primary">content</Container>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
