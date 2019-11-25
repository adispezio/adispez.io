import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import { Grid, Cell } from "styled-css-grid"
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import bp from '../components/style-utils.js'
import Img from "gatsby-image";

import adispezio from '../../static/img/adispezio-crop.jpg'
import training1 from '../../static/img/training-1.png'
import speaking1 from '../../static/img/speaking-1.png'
import tool1 from '../../static/img/tool1.png'
import trainspeak from '../../static/img/train-speak.png'

import client1 from '../../static/img/client1.png'
import client2 from '../../static/img/client2.png'
import client3 from '../../static/img/client3.png'

const Nav = styled.div`
  
`

const H1 = styled.h1`
  font-weight: 900;
  font-size: 46px;
  margin-top: 0px;
  margin-bottom: 30px;
  line-height: 1;

  @media ${bp.tablet} {
    font-size: 72px;
    margin-top: 30px;
  }
`

const Main = styled.div`
  display: grid;
  padding: 0 20px 0 20px;
  grid-gap: 70px 4vw;
  height: 100%;

  grid-template-columns: 1fr;
  grid-gap: 20px 2vw;

  @media ${bp.tablet} {
      padding: 0px 0 0 50px;
      grid-template-columns: 2fr 2fr;
      grid-gap: 70px 4vw;
  }

  @media ${bp.laptop} {
      padding: 0px 0 0 100px;
  }

  @media ${bp.desktop} {
      padding: 0px 0 0 150px;
  }
`

const Headers = styled.div`
  grid-row: 2;
  padding: 50px 0 0;
  align-self: flex-end;
  grid-column: 1;

  @media ${bp.tablet} {

  }
`

const Copy = styled.div`
  grid-row: 3;
  grid-column: 1;
  align-content: flex-end;
  padding: 0 0 50px;
  max-width: 520px;

  img {
    width: 100%;
  }
`

const Hero = styled.div`
  grid-column: 1;
  grid-row: 4;
  display: none;

  @media ${bp.tablet} {
    display: block;
    grid-column: 2;
    grid-row: 1 / span 3;
    height: 100vh;
    position: sticky;
    top: 0;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(111,162,255,0.25);
      z-index: 1;
    }
  }

  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ContentCont = styled.div`
  grid-column: 1;
  grid-row: 4;
  padding: 50px 0;
`

const ListColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Main>
        <Nav className="title">
          <h2>Anthony DiSpezio</h2>
          <a href="https://www.linkedin.com/in/adispezio/">LinkedIn</a>
       </Nav>
        <Headers>
          <H1>Deisgner, developer, and educator.</H1>
        </Headers>
        <Copy>
          <p>For the past seven years, Anthony has had the unique opportunity to work closely with visual and instructional design teams from organizations around the world. </p>
          <div className="row">
            <ul className="column no-style">
              <li>Workday</li>
              <li>Starbucks</li>
              <li>Teavana</li>
              <li>Nest</li>
              <li>Verizon</li>
            </ul>
            <ul className="column no-style">
              <li>McDonalds</li>
              <li>Liberty Mutual</li>
              <li>Whole Foods</li>
              <li>Benefit</li>
              <li>Caterpilar</li>
            </ul>
          </div>
          <h2>Design systems and templates to help customer content shine</h2>
          <p>While at Inkling, Anthony was the lead designer and developer on over 40 customer implementations. Working directly with visual design teams, he designed templates for the Inkling authoring platform to translate the branding and voice for each customer. These content templates were also designed to educate authors on best practices at the point of need.</p>
          <div className="row">
            <div className="column">
              <img src={client1} />
            </div>
            <div className="column">
              <img src={client2} />
            </div>
          </div>
          <h2>On-site trainings and workshops for client design teams</h2>
          <p>In addition to technical development, Anthony also led on-site trainings to help customers understand the Inkling platform and best practices of digital content design. Trainings ranged from introductory webinars to multi-day advanced workshops.</p>
          
          <img src={trainspeak} />
          <h2>Custom tools and prototypes for internal development</h2>
          <p>Anthony also puts his programming skills to work developing custom Inkling plugins and prototypes for both customers and the Inkling R&D teams. Many of the plugins/tools were eventually shipped as true product features.</p>
          <img className="border" src={tool1} />
        </Copy>
        <Hero>
          <img src={adispezio} />
        </Hero>
      </Main>
      {/* <h1>Deisgner, developer, and educator.</h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli.</p> */}
      {/* <Grid columns={2} gap="20px"> */}
      {/*   <Cell> */}
      {/*     <ul class="no-style"> */}
      {/*       <li>Workday</li> */}
      {/*       <li>Starbucks</li> */}
      {/*       <li>Teavana</li> */}
      {/*       <li>Nest</li> */}
      {/*       <li>Verizon</li> */}
      {/*     </ul> */}
      {/*   </Cell> */}
      {/*   <Cell> */}
      {/*     <ul class="no-style"> */}
      {/*       <li>McDonalds</li> */}
      {/*       <li>Allstate</li> */}
      {/*       <li>Whole Foods</li> */}
      {/*       <li>Benefit</li> */}
      {/*       <li>Caterpilar</li> */}
      {/*     </ul> */}
      {/*   </Cell> */}
      {/* </Grid> */}
      {/* <h2>Design systems and templates to help customer content shine.</h2> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli.</p> */}
      {/* <div className="media-offset"> */}
      {/*   <Grid columns={9} gap="20px"> */}
      {/*     <Cell width={5}> */}
      {/*       <img src={training1} /> */}
      {/*     </Cell> */}
      {/*     <Cell width={4} height={2}> */}
      {/*       <img src={speaking1} /> */}
      {/*     </Cell> */}
      {/*   </Grid> */}
      {/* </div> */}
      {/* <h2>On-site trainings and workshops for client design teams</h2> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli.</p> */}
      {/* <div className="media-offset"> */}
      {/*   <Grid columns={9} gap="20px"> */}
      {/*     <Cell width={5}> */}
      {/*       <img src={training1} /> */}
      {/*     </Cell> */}
      {/*     <Cell width={4} height={2}> */}
      {/*       <img src={speaking1} /> */}
      {/*     </Cell> */}
      {/*   </Grid> */}
      {/* </div> */}
      {/* <h2>Custom tools and prototypes for internal development</h2> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli.</p> */}
      {/* <div className="media-offset"> */}
      {/*   <Grid columns={9} gap="20px"> */}
      {/*     <Cell width={5}> */}
      {/*       <img src={tool1} /> */}
      {/*     </Cell> */}
      {/*     <Cell width={4} height={2}> */}
      {/*       <img src={speaking1} /> */}
      {/*     </Cell> */}
      {/*   </Grid> */}
      {/* </div> */}
    </Layout>
  )
}

export default IndexPage