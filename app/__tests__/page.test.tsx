import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home page', () => {
  it('renders the main heading and subtitle', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: /shiner systems/i })).toBeInTheDocument()
    expect(screen.getByText('Independent Software Consulting')).toBeInTheDocument()
  })
})


