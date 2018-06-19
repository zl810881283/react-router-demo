import React, { Component } from 'react';
import withAuth from './withAuth'

function Tab2(props) {
  return <div>tab2's content</div>
};
export default withAuth(Tab2) 