import React, { Component } from 'react'
import withRoot from '../../components/HOC'

class Forever extends Component {
  // Add some delay
  static async getInitialProps () {
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
export default withRoot()(Forever)
