// @flow
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRoot from '../components/HOC';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
// _app.js経由でアクセスする
// HOCパターンをここに適用すれば移行できそう
export default withRoot(MyApp);
