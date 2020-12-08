import React from 'react'
import renderer from 'react-test-renderer'
import Typography from '../../src/components/typography'

describe('Typography', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Typography />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
