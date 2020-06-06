import { render, cleanup } from '@testing-library/react'

import EventsPage from './EventsPage'

describe('EventsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<EventsPage />)
    }).not.toThrow()
  })
})
