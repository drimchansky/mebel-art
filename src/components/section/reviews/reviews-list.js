// packages
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Container from '@material-ui/core/Container'
import ReviewItem from './review-item'

const ReviewsList = () => {
  const reviewsData = useStaticQuery(graphql`
    query {
      allContentfulReview(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            name
            id
            date(formatString: "DD MMMM, YYYY", locale: "ru")
            childContentfulReviewBodyRichTextNode {
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `).allContentfulReview.edges

  return (
    <Container maxWidth="md">
      <ReviewsListStyled>
        {reviewsData.map((item) => {
          return (
            <ReviewItem
              key={item.node.id}
              name={item.node.name}
              date={item.node.date}
              images={item.node.images}
              html={item.node.childContentfulReviewBodyRichTextNode.childContentfulRichText.html}
            />
          )
        })}
      </ReviewsListStyled>
    </Container>
  )
}

const ReviewsListStyled = styled.ul`
  padding: 0;
`

export default ReviewsList
