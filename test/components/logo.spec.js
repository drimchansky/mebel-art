import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Logo from '../../src/components/ui/logo'

describe('Logo renders correctly', () => {
  it('Without props', () => {
    const tree = renderer.create(<Logo />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('With props', () => {
    const tree = renderer.create(<Logo desctoponly="true" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
