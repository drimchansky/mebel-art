// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// utils
import { colors, breakpoints } from '../util/css-config'
import { generateProtocolLink } from '../util/funcs'
// icons
import { VKIcon, TelegramIcon } from '../util/svg-components'

export const SocialHorizontal = () => {

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

  return (
    <SSocialHorizontal>
      <li>
        <SLink href={data.vk} bg="#4b729f">
          <VKIcon fill={colors.white} size="30px" />
          <span>ВКонтакте</span>
        </SLink>
      </li>
      <li>
        <SLink href={data.telegram} bg="#3b76a3">
          <TelegramIcon fillOuter={colors.white} fillInner="#3b76a3" size="30" />
          <span>Telegram</span>
        </SLink>
      </li>
      <li>
        <SLink href={generateProtocolLink('phone', data.phone_format)} bg={colors.dark}>
          <span>Позвонить</span>
        </SLink>
      </li>
    </SSocialHorizontal>
  )
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
  height: 50px;
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
