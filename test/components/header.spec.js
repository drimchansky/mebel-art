import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../../src/components/header'

describe('Header renders correctly', () => {
  it('Without props', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
