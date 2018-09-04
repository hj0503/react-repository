import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouteMap from './router/RouteMap'
import Router from '../src/router/RouteMap'



render(
    <Router />,
    document.getElementById('app')
);