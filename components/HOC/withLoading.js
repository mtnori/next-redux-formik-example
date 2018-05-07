import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';

const linkStyle = {
  margin: '0 10px 0 0'
};

const withLoading = Page =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      if (Page.getInitialProps && typeof Page.getInitialProps === 'function') {
        const props = await Page.getInitialProps(ctx);
        return props;
      }
      return {};
    }
    constructor(props) {
      super(props);
      Router.onRouteChangeStart = url => {
        console.log(`Loading: ${url}`);
        NProgress.start();
      };
      Router.onRouteChangeComplete = () => {
        NProgress.done();
      };
      Router.onRouteChangeError = () => NProgress.done();
    }

    render() {
      return (
        <div>
          <div style={{ marginBottom: 20 }}>
            <Head>
              {/* Import CSS for nprogress */}
              <link
                rel="stylesheet"
                type="text/css"
                href="/static/nprogress.css"
              />
            </Head>
            <Link href="/loading">
              <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/loading/about">
              <a style={linkStyle}>About</a>
            </Link>
            <Link href="/loading/forever">
              <a style={linkStyle}>Forever</a>
            </Link>
            <Link href="/loading/non-existing">
              <a style={linkStyle}>Non Existing Page</a>
            </Link>
          </div>
          <Page {...this.props} />
        </div>
      );
    }
  };
export default withLoading;
