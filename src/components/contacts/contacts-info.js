// packages
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// icons
import PlaceIcon from '@material-ui/icons/Place'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
// utils
import { colors } from '../../util/css-config'
import generateProtocolLink from '../../util/generate-protocol-link'

const ContactsInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralInfo {
        edges {
          node {
            eMail
            phone
          }
        }
      }
    }
  `).allContentfulGeneralInfo.edges[0].node

  return (
    <InfoStyled>
      <ul>
        <li>
          <PlaceIcon />
          <span>Где мы работаем</span>
          <small>Ярославль и Ярославская область</small>
        </li>
        <li>
          <MailOutlineIcon />
          <span>
            <a href={generateProtocolLink('email', data.phone)}>{data.eMail}</a>
          </span>
        </li>
        <li>
          <PhoneIphoneIcon />
          <span>
            <a href={generateProtocolLink('phone', data.phone)}>{data.phone}</a>
          </span>
        </li>
      </ul>
    </InfoStyled>
  )
}

const InfoStyled = styled.div`
  color: ${colors.dark};
  padding: 2rem;
  padding-left: 3rem;

  @media (min-width: 960px) {
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  & ul {
    list-style-type: none;
    padding: 0;

    @media (min-width: 960px) {
      margin-top: 5rem;
    }
  }

  & li {
    position: relative;
    margin-top: 1rem;

    @media (min-width: 960px) {
      margin-top: 2rem;
    }
  }

  & span {
    font-weight: 400;
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: ${colors.black};

    & a {
      color: ${colors.black};
    }

    @media (min-width: 960px) {
      margin-bottom: 1rem;
    }
  }

  & small {
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
  }

  & svg {
    position: absolute;
    left: -2rem;
    top: -0.2rem;
    fill: ${colors.dark};
  }
`

export default ContactsInfo
