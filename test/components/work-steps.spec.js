import React from 'react'
import renderer from 'react-test-renderer'
import WorkSteps from '../../src/components/work-steps'

describe('WorkSteps', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WorkSteps />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
