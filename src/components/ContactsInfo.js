// packages
import React from 'react'
import styled from 'styled-components'
// icons
import PlaceIcon from '@material-ui/icons/Place'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
// utils
import { colors } from '../util/cssConfig'

const ContactsInfo = () => {
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
          <span>example@gmail.com</span>
        </li>
        <li>
          <PhoneIphoneIcon />
          <span>(01) 666 - 693 - 456</span>
        </li>
      </ul>
    </InfoStyled>
  )
}

const InfoStyled = styled.div`
  color: ${colors.black};
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
    fill: ${colors.accent};
  }
`

export default ContactsInfo
