import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { ThemeProvider } from '../../components'
import Button from '.'

describe('<Button />', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(
      <ThemeProvider>
        <Button>content</Button>
      </ThemeProvider>
    )
    expect(queryByTestId('button')).toMatchSnapshot()
  })

  it('should render a snapshot', async () => {
    const { container } = render(
      <ThemeProvider>
        <Button textColor="red">click me</Button>
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })

  it('triggers clicks correctly', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider>
        <Button onClick={onClick}>click me</Button>
      </ThemeProvider>
    )
    fireEvent.click(getByTestId('button'))
    expect(onClick).toBeCalledTimes(1)
  })
})
