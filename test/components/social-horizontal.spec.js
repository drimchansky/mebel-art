import React from 'react'
import renderer from 'react-test-renderer'
import { PureSocialHorizontal as SocialHorizontal } from '../../src/components/social-horizontal'
import { StaticQuery } from 'gatsby'

describe('SocialHorizontal', () =>
  it('renders correctly', () => {
    const data = StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        allContentfulGeneralInfo: {
          edges: {
            node: {
              vk: 'x',
              telegram: 'x',
              viber: 'x',
            },
          },
        },
      })
    )

    const tree = renderer.create(<SocialHorizontal data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
