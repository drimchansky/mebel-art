import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Social from '../../src/components/social'

test('Without props', () => {
  const tree = renderer.create(<Social />).toJSON()
  expect(tree).toMatchSnapshot()
})
