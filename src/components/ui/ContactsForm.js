// packages
import React from 'react'
import styled from 'styled-components'
// compoents
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CustomButtom from './CustomButton'
// icons
import SendIcon from '@material-ui/icons/Send'
// utils
import { colors, shadows } from '../../util/cssConfig'

const ContactsForm = () => {
  return (
    <FormStyled>
      <TitleStyled>Заинтересованы в покупке кухни мечты?</TitleStyled>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={5} alignContent="space-between">
          <TextFieldStyled
            id="name"
            label="Имя"
            color="primary"
            variant="outlined"
            required
            fullWidth
          />
          <TextFieldStyled
            id="tel"
            type="tel"
            label="Телефон"
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextFieldStyled
            id="textarea"
            multiline
            label="Cообщение"
            variant="outlined"
            color="primary"
            rows={4}
            required
            fullWidth
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <CustomButtom
            bgcolor={colors.accent}
            textcolor={colors.white}
            size="large"
            variant="contained"
            startIcon={<SendIcon />}
            style={{ padding: '0.5rem 3rem', marginTop: '1.5rem' }}>
            Отправить
          </CustomButtom>
        </Grid>
      </Grid>
    </FormStyled>
  )
}

const TitleStyled = styled.span`
  display: block;
  padding: 0.5rem 0 1rem 0;
  font-size: 1.2rem;
  color: ${colors.black};

  @media (min-width: 960px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: ${colors.black};
  }
`

const FormStyled = styled.form`
  margin: 0 auto;
  padding: 1rem 0.5rem 2rem;

  @media (min-width: 960px) {
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 3rem 3.5rem 4rem 3.5rem;
    width: 900px;
    background: ${colors.white};
    /* border: 1px solid black; */
    box-shadow: ${shadows.five};
    border-radius: 7px;
  }
`
//
//  Overwriting MaterialUI styles. Using IMPORTANT is justified
//

const TextFieldStyled = styled(TextField)`
  @media (min-width: 960px) {
    margin-bottom: 0 !important;
  }

  & fieldset {
    border-color: ${colors.black} !important;
    /* Fix border visibility */
    margin: -1px;
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

    @media (min-width: 960px) {
      color: ${colors.black};
      margin-bottom: none !important;
    }
  }
`

const StyledButton = styled(Button)``

export default ContactsForm
