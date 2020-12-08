import React from 'react'
import renderer from 'react-test-renderer'
import { PureImagesGrid as ImagesGrid } from '../../src/components/images-grid'
import { StaticQuery } from 'gatsby'
import { shallow } from 'enzyme'

describe('ImagesGrid', () =>
  it('renders correctly', () => {
    const data = StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        x: 'x',
      })
    )

    const tree = shallow(<ImagesGrid data={data} />)
    expect(tree).toMatchSnapshot()
  }))
