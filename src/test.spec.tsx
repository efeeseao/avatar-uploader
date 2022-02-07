import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render avatar uploader', async () => {
    const { queryAllByTestId } = render(<App />)
    expect(queryAllByTestId('avatar')).toBeTruthy()
  })
})
