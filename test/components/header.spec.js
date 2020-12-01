import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../../src/components/header'

test('Without props', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
