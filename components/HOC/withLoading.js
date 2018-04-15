import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

const linkStyle = {
  margin: '0 10px 0 0'
}

const withLoading = (Component) =>
  class extends React.Component {
    static async getInitialProps() {
      console.log('call getInitialProps')
      if (Component.getInitialProps) {
        return await Component.getInitialProps();
      }
      return {};
    }
    constructor(props) {
      super(props);
      Router.onRouteChangeStart = (url) => {
        console.log(`Loading: ${url}`)
        NProgress.start()
      }
      Router.onRouteChangeComplete = () => {
        console.log('ルーティング終了')
        NProgress.done()
      }
      Router.onRouteChangeError = () => NProgress.done()
    }

    render() {
      return (
        <div>
          <div style={{ marginBottom: 20 }}>
            <Head>
              {/* Import CSS for nprogress */}
              <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
            </Head>

            <Link href='/loading?foo=bar' shallow><a style={linkStyle}>Home(shallow)</a></Link>
            <Link href='/loading'><a style={linkStyle}>Home</a></Link>
            <Link href='/loading/about'><a style={linkStyle}>About</a></Link>
            <Link href='/loading/forever'><a style={linkStyle}>Forever</a></Link>
            <Link href='/loading/non-existing'><a style={linkStyle}>Non Existing Page</a></Link>
          </div>
          <Component {...this.props} />
        </div>
      );
    }
  };
export default withLoading;
