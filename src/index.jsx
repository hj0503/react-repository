import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouteMap from './router/RouteMap'
import Home from './container/Home'



render(
    <Home />,
    document.getElementById('app')
);