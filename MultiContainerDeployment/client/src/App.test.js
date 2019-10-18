import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // cleaning of tests coz, they will fail.
  // reason ? : this test will try to invoke fib.js component which will in turn call Express app
  // Express app is not running at this moment( while building frontend).
});
