import { render, cleanup } from '@testing-library/react'

import HeaderOnlyLayout from './HeaderOnlyLayout'

describe('HeaderOnlyLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderOnlyLayout />)
    }).not.toThrow()
  })
})
