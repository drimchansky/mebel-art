import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { PureContactsBg as ContactsBg } from '../../src/components/contacts/contacts-bg'

describe('Contacts', () => {
  it('ContactsBg renders correctly', () => {
    const tree = renderer.create(<ContactsBg />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
