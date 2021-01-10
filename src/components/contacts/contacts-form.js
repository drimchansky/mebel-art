// packages
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import cogoToast from 'cogo-toast'
import axios from 'axios'
// compoents
import { Grid, TextField } from '@material-ui/core'
import { Button } from 'gatsby-theme-material-ui'
import Title from '../title'
import SocialHorizontal from '../social-horizontal'
// icons
import SendIcon from '@material-ui/icons/Send'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
// utils
import { colors, shadows, breakpoints } from '../../util/css-config'

const useStyles = makeStyles((theme) => ({
  field: {
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },

    '& fieldset': {
      borderColor: colors.black,
    },
    '& textarea, & input': {
      height: '100% !important',
    },
  },
  button: {
    color: colors.white,
    background: colors.dark,
    '&:hover': {
      background: colors.dark,
    },
  },
}))

const ContactsForm = () => {
  const classes = useStyles()

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
      .then(() => {
        cogoToast.success('Ваше сообщение отправлено!')
        setFormName('')
        setFormPhone('')
        setFormMessage('')
        setLoading(false)
      })
      .catch(() => {
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
          <TextField
            className={classes.field}
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

          <TextField
            className={classes.field}
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
          <TextField
            className={classes.field}
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
          <Button
            className={classes.button}
            size="large"
            type="submit"
            variant="contained"
            startIcon={loading ? <HourglassEmptyIcon /> : <SendIcon />}
            margintop="1.5rem"
            disabled={loading}>
            Отправить
          </Button>
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

export default ContactsForm
