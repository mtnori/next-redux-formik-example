// @flow
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const withAppBar = Page =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      if (Page.getInitialProps && typeof Page.getInitialProps === 'function') {
        const props = await Page.getInitialProps(ctx);
        return props;
      }
      return {};
    }
    render() {
      return (
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>
          <Page />
        </div>
      );
    }
  };
export default withAppBar;
