// packages
import React, { useState } from 'react'
import styled from 'styled-components'
import cogoToast from 'cogo-toast'
import axios from 'axios'
// compoents
import { Grid, TextField } from '@material-ui/core'
import CustomButton from '../custom-button'
import Title from '../title'
import SocialHorizontal from '../social-horizontal'
// icons
import SendIcon from '@material-ui/icons/Send'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
// utils
import { colors, shadows, breakpoints } from '../../util/css-config'

const ContactsForm = () => {
  const [formName, setFormName] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setLoading(true)

    axios({
      method: 'POST',
      url: 'https://formsubmit.co/ajax/deko32@mail.ru',
      // url: 'https://formsubmit.co/ajax/drimchansky@gmail.com',
      data: data,
    })
      .then(function (response) {
        cogoToast.success('Ваше сообщение отправлено!')
        setFormName('')
        setFormPhone('')
        setFormMessage('')
        setLoading(false)
      })
      .catch(function (response) {
        cogoToast.error(
          'Что-то пошло не так, вы можете связаться с нами через социальные сети или по телефону',
          {
            hideAfter: 10,
          }
        )
      })
  }

  return (
    <FormStyled onSubmit={handleSubmit} id="contact-form">
      <Title alignment="left">
        <h2>Заинтересованы в покупке кухни мечты?</h2>
        <span>Вы можете связаться с нами в удобной для вас социальной сети или мессенджере:</span>
      </Title>
      <SocialHorizontal />
      <Title alignment="left">
        <span>Или оставить заявку на звонок:</span>
      </Title>
      <Grid container spacing={2} justify="center">
        <Grid item container xs={12} sm={8} md={5} justify="center">
          <TextFieldStyled
            id="name"
            label="Имя"
            name="Имя"
            onChange={(e) => setFormName(e.target.value)}
            value={formName}
            color="primary"
            variant="outlined"
            required
            fullWidth
            style={{
              marginRight: '3px',
            }}
          />
          <TextFieldStyled
            id="tel"
            type="tel"
            label="Телефон"
            name="Телефон"
            onChange={(e) => setFormPhone(e.target.value)}
            value={formPhone}
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
            style={{
              marginRight: '3px',
            }}
          />
        </Grid>
        <Grid item container xs={12} sm={8} md={7}>
          <TextFieldStyled
            id="textarea"
            multiline
            label="Cообщение"
            name="Сообщение"
            onChange={(e) => setFormMessage(e.target.value)}
            value={formMessage}
            variant="outlined"
            color="primary"
            required
            fullWidth
            style={{
              marginRight: '3px',
            }}
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <CustomButton
            bgcolor={colors.dark}
            textcolor={colors.white}
            size="large"
            type="submit"
            variant="contained"
            startIcon={loading ? <HourglassEmptyIcon /> : <SendIcon />}
            margintop="1.5rem"
            disabled={loading}>
            Отправить
          </CustomButton>
        </Grid>
      </Grid>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  margin: 0 auto;
  padding: 1rem 0.5rem 2rem;

  @media (min-width: ${breakpoints.medium}) {
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translate(-50%, 3%);
    padding: 3rem 3.5rem 4rem 3.5rem;
    width: 900px;
    background: ${colors.white};
    box-shadow: ${shadows.five};
    border-radius: 7px;
  }

  @media (min-width: ${breakpoints.large}) {
    transform: translate(-50%, 33%);
  }
`
//
//  Overwriting MaterialUI styles. Using IMPORTANT is justified
//

const TextFieldStyled = styled(TextField)`
  flex-direction: row !important;

  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 0 !important;
  }

  & fieldset {
    border-color: ${colors.black} !important;
  }

  & label {
    color: ${colors.black} !important;
    @media (min-width: 960px) {
      color: ${colors.black} !important;
    }
  }

  & textarea,
  & input {
    color: ${colors.black};
    height: 100% !important;

    @media (min-width: 960px) {
      color: ${colors.black};
      margin-bottom: none !important;
    }
  }
`

export default ContactsForm
