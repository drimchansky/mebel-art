import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import OurSocials from '../../src/components/our-socials'

describe('OurSocials', () => {
  it('renders correctly', () => {
    const tree = shallow(<OurSocials />)
    expect(tree).toMatchSnapshot()
  })
})
