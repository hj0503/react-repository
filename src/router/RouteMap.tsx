import * as React from 'react'
import { Router, HashRouter , Route, Link, Switch } from 'react-router-dom'

import App from '../container/App'
import Home from '../container/Home'
import City from '../container/City'
import User from '../container/User'
import Search from '../container/Search'
import Detail from '../container/Detail'
import NotFound from '../container/NotFound'

export default class RouteMap extends React.Component<any> {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/city" component={ City } />
          <Route path="/user" component={ User } />
          <Route path="/search/:type(/:keyword)" component={ Search } />
          <Route path="/detail/:id" component={ Detail } />
        </Switch>
      </HashRouter>
    )
  }
}
