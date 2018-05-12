// @flow
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Index = () => {
  const handleClick = () => {
    Router.push('/page');
  };

  return (
    <div>
      <p>Welcome to next.js</p>
      <button onClick={handleClick}>aaaaa</button>
    </div>
  );
};
export default Index;
