import React, { Component } from 'react'
import * as allComponents from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedRoutes: [],
      redirectRoutes: [],
    }
  }

  componentDidMount() {
    let role = this.props.role
    if (role) {
      this.setState({
        allowedRoutes: rolesConfig[role].routes,
        redirectRoutes: [rolesConfig[role].redirect]
      })
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <>
        <Switch>
          {this.state.allowedRoutes.map(route =>
            < Route
              exact path={route.url}
              component={allComponents[route.component]}
              key={route.url}
            />
          )}
          {this.state.redirectRoutes.map(url => {
            <Redirect to={url} />
          })}
        </Switch>
      </>
    )
  }
}

export default withRouter(PrivateRoute);
