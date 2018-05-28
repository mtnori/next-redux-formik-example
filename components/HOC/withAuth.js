import * as React from 'react';
import Router from 'next/router';

const withAuth = Page =>
  class extends React.Component {
    static async getInitialProps({ Component, ctx }) {
      if (
        Component.getInitialProps &&
        typeof Component.getInitialProps === 'function'
      ) {
        const props = await Component.getInitialProps(ctx);
        return {
          ...props,
          pathname: ctx.pathname
        };
      }
      return {
        pathname: ctx.pathname
      };
    }
    static getDerivedStateFromProps(nextProps) {
      console.log('1.gDSFP');
      const { pathname } = nextProps;
      if (pathname === '/') {
        console.log('call');
        return {
          pathname: '/page'
        };
      }
      return {
        isLoading: false
      };
    }
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        pathname: props.pathname
      };
    }
    componentDidMount() {
      console.log('2.cdm');
      if (this.state.pathname === '/page') {
        console.log('3.push');
        Router.push({
          pathname: this.state.pathname
        });
      }
    }
    /*
    componentDidMount() {
      const {
        router: { pathname }
      } = this.props;
      if (pathname === '/') {
        Router.push({
          pathname: '/page'
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    }
    */
    render() {
      const { pathname } = this.props;
      console.log(`This page is ${pathname}`);
      console.log('App render');
      const { isLoading } = this.state;
      return isLoading ? <div>Loading...</div> : <Page {...this.props} />;
    }
  };
export default withAuth;
