import * as React from 'react';
import Router from 'next/router';

const withAuth = Page =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      if (Page.getInitialProps && typeof Page.getInitialProps === 'function') {
        const props = await Page.getInitialProps(ctx);
        return props;
      }
      return {};
    }
    state = {
      isLoading: true
    };
    componentDidMount() {
      console.log(Router.pathname);
      if (Router.pathname === '/') {
        Router.push({
          pathname: '/page'
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    }
    render() {
      const { isLoading } = this.state;
      return isLoading ? <div>Loading...</div> : <Page {...this.props} />;
    }
  };
export default withAuth;
