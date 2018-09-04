import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import List from '../List'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <Router>
        <div>  
          <Link to="/">to home</Link>
          <Link to="/list">to list</Link>
          <Link to="/detail">to detail</Link>
          <p>Header</p>
          <Route path="/list" component={ List } />
          <Route path="/detail" component={ Detail } />
          <p>Footer</p>
        </div>
      </Router>
    )
  }
}
