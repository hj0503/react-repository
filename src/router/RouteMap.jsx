import React, { Component } from 'react'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'

import App from '../container/App'
import Home from '../container/Home'
import List from '../container/List'
import Detail from '../container/Detail'
import NotFound from '../container/NotFound'

export default class RouteMap extends Component {
  updateHandle() {
    console.log('每次roiuter变化之后都会触发')
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}
