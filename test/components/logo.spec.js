import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Logo from '../../src/components/ui/logo'

test('Logo renders correctly', () => {
  const tree = renderer.create(<Logo />).toJSON()
  expect(tree).toMatchSnapshot()
})
