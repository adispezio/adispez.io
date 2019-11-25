import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import styled, { createGlobalStyle } from 'styled-components'
import { Grid, Cell } from "styled-css-grid";
import bp from './style-utils.js'

import './all.scss'

const GlobalStyle = createGlobalStyle`

`
// const Content = styled.div`
//   max-width: 970px;
//   margin: 0 auto;
// `

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,900&display=swap" rel="stylesheet" />>

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar/> */}
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default TemplateWrapper
