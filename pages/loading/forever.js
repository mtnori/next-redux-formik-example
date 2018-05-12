import React, { Component } from 'react';
import withLoading from '../../components/HOC/withLoading';

const Forever = props => (
  <div>
    <p>This page was rendered for a while!</p>
  </div>
);
Forever.getInitialProps = async ctx => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
  return {};
};
export default Forever;
