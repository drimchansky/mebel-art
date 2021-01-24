// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// utils
import { colors } from '../util/css-config'

function createMarkup(answer) {
  return { __html: answer }
}

const Questions = () => {

  const questionsData = useStaticQuery(graphql`
    query {
      allContentfulQuestion(sort: { fields: updatedAt, order: DESC }) {
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
              <SQuestion>{question.node.question}</SQuestion>
            </AccordionSummary>

            <AccordionDetails>
              <SAnswer dangerouslySetInnerHTML={createMarkup(question.node.answer.answer)} />
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

const SQuestion = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

const SAnswer = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5;

  & a {
    color: ${colors.dark};
    font-weight: 700;
  }
`

export default Questions
