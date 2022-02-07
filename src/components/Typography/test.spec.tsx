import React from 'react'
import { render } from '@testing-library/react'

import Typography from '.'

describe('<Typography />', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<Typography>content</Typography>)
    expect(queryByTestId('typography')).toMatchSnapshot()
  })

  it('should render title variant snapshot', () => {
    const { container } = render(
      <Typography variant="title">title typography</Typography>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render text variant snapshot', () => {
    const { container } = render(
      <Typography variant="text">text typography</Typography>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render error variant snapshot', () => {
    const { container } = render(
      <Typography variant="error">error typography</Typography>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render default variant snapshot', () => {
    const { container } = render(<Typography>typography</Typography>)
    expect(container).toMatchSnapshot()
  })
})
