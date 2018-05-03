import React from 'react';
import BaseApp, { Container } from "next/app";
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import getPageContext from './getPageContext';

function withMaterialUI(Component) {
  class WithMaterialUI extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  WithMaterialUI.propTypes = {
    pageContext: PropTypes.object,
  };

  WithMaterialUI.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithMaterialUI;
}

export default withMaterialUI;
