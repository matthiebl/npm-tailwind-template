import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../src'

describe('Button', () => {
  it('should render a basic primary button with the text as children', () => {
    const { container } = render(<Button>Button Text</Button>)
    const button = container.getElementsByTagName('button')

    expect(button.length).toEqual(1)
    expect(button[0].textContent).toEqual('Button Text')
  })

  it('should render a button with href as an anchor tag', () => {
    const { container } = render(<Button href='/example/path'>Link Text</Button>)
    const button = container.getElementsByTagName('a')

    expect(button.length).toEqual(1)
    expect(button[0].textContent).toEqual('Link Text')
    expect(button[0].getAttribute('href')).toEqual('/example/path')
    expect(button[0].getAttribute('target')).not.toEqual('_blank')
  })

  it('should render a button with href and external prop as anchor tag with target blank', () => {
    const { container } = render(
      <Button href='/example/path' external>
        Link Text
      </Button>,
    )
    const button = container.getElementsByTagName('a')

    expect(button.length).toEqual(1)
    expect(button[0].textContent).toEqual('Link Text')
    expect(button[0].getAttribute('href')).toEqual('/example/path')
    expect(button[0].getAttribute('target')).toEqual('_blank')
  })

  // Simple rendering for coverage as tests do not focus on style
  it('should render the different variants', () => {
    render(<Button variant='primary'>Text</Button>)
    render(<Button variant='secondary'>Text</Button>)
    render(<Button variant='text'>Text</Button>)
  })

  // Simple rendering for coverage as tests do not focus on style
  it('should render the different sizes', () => {
    render(<Button size='small'>Text</Button>)
    render(<Button size='medium'>Text</Button>)
    render(<Button size='large'>Text</Button>)
  })
})
