import React from "react";
import { initStore } from '../redux/store'
import withRoot from "../components/HOC";

class MyApp extends React.Component {
  static async getInitialProps({Component, ctx}) {
    // we can dispatch from here too
    // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    );
  }
}
// _app.js経由でアクセスする
// HOCパターンをここに適用すれば移行できそう
export default withRoot(MyApp);
