import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading'
function Nav(props) {
  return (
    <nav>
      <Link to="/tab1">tab 1</Link>
      <Link to="/tab2">tab 2</Link>
      <Link to="/tab3">tab 3</Link>
    </nav>
  )
}

export default class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/tab1" component={
            Loadable({
              loader: () => import("./Tab1"),
              loading: Loading
            })
          } />
          <Route path="/tab2" component={
            Loadable({
              loader: () => import("./Tab2"),
              loading: Loading
            })
          } />
          <Route path="/tab3" component={
            Loadable({
              loader: () => import("./Tab3"),
              loading: Loading
            })
          } />
          <Route path="/NotFound" component={
            Loadable({
              loader: () => import("./NotFound"),
              loading: Loading
            })
          } />
        </Switch>
      </div>
    );
  }
}