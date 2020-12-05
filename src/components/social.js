// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// icons
import { VKIcon, ViberIcon, TelegramIcon } from '../util/svg-components'
// utils
import { colors } from '../util/css-config'

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            vk
            telegram
            viber
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return (
    <SocialStyled>
      <li>
        <a href={data.vk} target="_blank" rel="noreferrer">
          <VKIcon fill="#4b729f" />
        </a>
      </li>
      <li>
        <a href={data.viber} target="_blank" rel="noreferrer">
          <ViberIcon fill="#8e24aa" />
        </a>
      </li>
      <li>
        <a href={data.telegram} target="_blank" rel="noreferrer">
          <TelegramIcon fillOuter="#039be5" fillInner={colors.white} />
        </a>
      </li>
    </SocialStyled>
  )
}

const SocialStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  & li:not(:first-child) {
    margin-left: 15px;
  }

  & a {
    display: block;
    width: 1.7rem;
    height: 1.7rem;
    transition: opacity 0.8s;

    &:hover {
      opacity: 0.8;
    }
  }

  & svg {
    height: 100%;
    width: 100%;
  }
`

export default Social
