// @flow
import * as React from 'react';
import withRoot from '../components/HOC';

type Props = {
  Component: React.ComponentType<any>,
  pageProps: {}
};

class MyApp extends React.Component<Props> {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
// _app.js経由でアクセスする
// HOCパターンをここに適用すれば移行できそう
export default withRoot(MyApp);
