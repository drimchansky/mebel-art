import React from 'react'
import renderer from 'react-test-renderer'
import { PureSocial as Social } from '../../src/components/social'
import { StaticQuery } from 'gatsby'

describe('Social', () =>
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

    const tree = renderer.create(<Social data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
