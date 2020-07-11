// packages
import React from 'react'
import styled from 'styled-components'
// compoents
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CustomButton from '../../ui/CustomButton'
// icons
import SendIcon from '@material-ui/icons/Send'
// utils
import { colors, shadows } from '../../../util/cssConfig'

const ContactsForm = () => {
  return (
    <FormStyled>
      <TitleStyled>Заинтересованы в покупке кухни мечты?</TitleStyled>
      <Grid container spacing={2} justify="center">
        <Grid item container xs={12} sm={8} md={5} justify="center">
          <TextFieldStyled
            id="name"
            label="Имя"
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
            bgcolor={colors.accent}
            textcolor={colors.white}
            size="large"
            variant="contained"
            startIcon={<SendIcon />}
            margintop="1.5rem">
            Отправить
          </CustomButton>
        </Grid>
      </Grid>
    </FormStyled>
  )
}

const TitleStyled = styled.span`
  display: block;
  padding: 0.5rem 0 2rem 0;
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
  flex-direction: row !important;

  @media (min-width: 960px) {
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
    height: 100%;

    @media (min-width: 960px) {
      color: ${colors.black};
      margin-bottom: none !important;
    }
  }
`

export default ContactsForm
