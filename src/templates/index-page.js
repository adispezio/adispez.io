import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { Grid, Cell } from "styled-css-grid";

import styled from 'styled-components'


const customers = [
  "Workday",
  "Starbucks",
  "Teavana",
  "Nest",
  "McDonalds",
  "Allstate",
  "Whole Foods",
  "Benefit",
  "Caterpilar",
  "Verizon",
  "Vera Bradley",
  "Hikvision",
]

const moreCustomers = [
  "Liberty Mutual",
  "Comcast",
  "Toyota",
  "Pearson",
  "HMH",
  "Kaplan",
  "Elsevier",
  "McDonalds",
  "McGraw Hill",
  "Salesforce",
  "LinkedIn",
  "Roche",
  "Cengage",
  "Ecolab",
  "Chik Fil-A",
]

const Hero = styled.h1`
  font-size: 56px;
  font-weight: 900;
`

export const IndexPageTemplate = ({
    image,
    title,
    content, 
    contentComponent,
    heading,
    subheading,
    description,
    intro,
  }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Hero>{description}</Hero>
      <PageContent className="content" content={content} />
      <p>fffLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli.</p>
      
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <IndexPageTemplate
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplateOld {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
