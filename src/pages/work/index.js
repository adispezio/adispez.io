import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import WorkList from '../../components/WorkList'


export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <h1>
            Work
          </h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorkList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
