// @flow
import React from 'react';
import withAuth from '../components/HOC/withAuth';

const Index = () => <div>Welcome to next.js</div>;
export default withAuth(Index);
