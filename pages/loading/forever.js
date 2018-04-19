// @flow
import React, { Component } from 'react'
import withLoading from '../../components/HOC/withLoading'

const forever = class Forever extends Component<*> {
  // Add some delay
  static async getInitialProps (ctx) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    return {}
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>This page was rendered for a while!</p>
      </div>
    )
  }
}

export default withLoading(forever)
