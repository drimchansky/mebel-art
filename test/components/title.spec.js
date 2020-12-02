import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Title from '../../src/components/title'

test('Without props', () => {
  const tree = renderer.create(<Title />).toJSON()
  expect(tree).toMatchSnapshot()
})
