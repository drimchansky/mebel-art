// packages
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// icons
import { VKIcon, ViberIcon, TelegramIcon } from '../util/svg-components'
// utils
import { colors } from '../util/css-config'

export const PureSocial = ({ data }) => {
  return (
    <SocialStyled>
      <li>
        <a href={data.vk} target="_blank" rel="noreferrer" aria-label="ВКонтакте">
          <VKIcon fill="#4b729f" />
        </a>
      </li>

      <li>
        <a href={`viber://add?number=${data.phone_format}`} target="_blank" rel="noreferrer" aria-label="Viber">
          <ViberIcon fill="#8e24aa" />
        </a>
      </li>

      <li>
        <a href={data.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
          <TelegramIcon fillOuter="#039be5" fillInner={colors.white} />
        </a>
      </li>
    </SocialStyled>
  )
}

PureSocial.propTypes = {
  data: PropTypes.object
};

const Social = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            vk
            telegram
            phone_format
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return <PureSocial {...props} data={data}></PureSocial>
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
