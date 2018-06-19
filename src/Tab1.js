import React, { Component } from 'react';
import withAuth from './withAuth'

function Tab1(props) {
  return <div>tab1's content</div>
};
export default withAuth(Tab1) 