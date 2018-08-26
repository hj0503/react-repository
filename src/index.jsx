import React, { Component } from 'react';
import { render } from 'react-dom';
import { Perf } from 'react-addons-perf';

//性能检测
if (_DEV_) {      //_DEV_表示在开发环境下 
  window.Perf = Perf
}



render(
    <div>Hello React!!!</div>,
    document.getElementById('app')
);