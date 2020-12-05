// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Questions = () => {
  const questionsData = useStaticQuery(graphql`
    query {
      allContentfulQuestion {
        edges {
          node {
            id
            question
            answer {
              answer
            }
          }
        }
      }
    }
  `).allContentfulQuestion.edges

  return (
    <>
      {questionsData.map((question) => {
        return (
          <Accordion key={question.node.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionStyled>{question.node.question}</QuestionStyled>
            </AccordionSummary>
            <AccordionDetails>
              <AnswerStyled>{question.node.answer.answer}</AnswerStyled>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

const QuestionStyled = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

const AnswerStyled = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
`

export default Questions
