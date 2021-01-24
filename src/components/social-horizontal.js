// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
// utils
import { colors, breakpoints } from '../util/css-config'
// icons
import { VKIcon, ViberIcon, TelegramIcon } from '../util/svg-components'

export const PureSocialHorizontal = ({ data }) => {
  return (
    <SSocialHorizontal>
      <li>
        <SLink href={data.vk} bg="#4b729f">
          <VKIcon fill={colors.white} size="30px" />
          <span>ВКонтакте</span>
        </SLink>
      </li>
      {/* <li>
        <SLink href={data.viber} bg="#8e24aa">
          <ViberIcon fill={colors.white} size="30px" />
          <span>Viber</span>
        </SLink>
      </li> */}
      <li>
        <SLink href={data.telegram} bg="#3b76a3">
          <TelegramIcon fillOuter={colors.white} fillInner="#3b76a3" size="30" />
          <span>Telegram</span>
        </SLink>
      </li>
    </SSocialHorizontal>
  )
}

PureSocialHorizontal.propTypes = {
  data: PropTypes.object
}

export const SocialHorizontal = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            vk
            telegram
            viber
            phone_format
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return <PureSocialHorizontal {...props} data={data} />
}

const SSocialHorizontal = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoints.small}) {
    flex-direction: row;
  }

  & li {
    width: 80%;

    @media (min-width: ${breakpoints.small}) {
      width: 30%;
      &:not(:first-child) {
      margin-left: 20px;
    }
    }

    @media (max-width: ${breakpoints.small}) {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`

const SLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  transition: opacity 0.2s;
  text-decoration: none;
  font-weight: 400;

  &:hover,
  &:focus {
    opacity: 0.9;
  }

  & span {
    color: ${colors.white};
    padding-left: 10px;
  }
`

export default SocialHorizontal
