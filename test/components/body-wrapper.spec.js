import React from 'react'
import renderer from 'react-test-renderer'
import BodyWrapper from '../../src/components/body-wrapper'

describe('BodyWrapper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BodyWrapper />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
