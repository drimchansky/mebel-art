// packages
import React from 'react'
import styled from 'styled-components'
// utils
import { colors, breakpoints } from '../util/css-config'
// icons
import { VKIcon, ViberIcon, TelegramIcon } from '../util/svg-components'

const SocialHorizontal = () => {
  return (
    <SocialHorizontalStyled>
      <li>
        <LinkStyled href="/" bg="#4b729f">
          <VKIcon fill={colors.white} size="30px" />
          <span>ВКонтакте</span>
        </LinkStyled>
      </li>
      <li>
        <LinkStyled href="/" bg="#8e24aa">
          <ViberIcon fill={colors.white} size="30px" />
          <span>Viber</span>
        </LinkStyled>
      </li>
      <li>
        <LinkStyled href="/" bg="#039be5">
          <TelegramIcon fillOuter={colors.white} fillInner="#039be5" size="30" />
          <span>Telegram</span>
        </LinkStyled>
      </li>
    </SocialHorizontalStyled>
  )
}

const SocialHorizontalStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoints.small}) {
    flex-direction: row;
  }

  & li {
    width: 60%;

    @media (min-width: ${breakpoints.small}) {
      width: 30%;
    }

    @media (max-width: ${breakpoints.small}) {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`

const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  transition: opacity 0.2s;
  text-decoration: none;

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