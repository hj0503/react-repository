import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>Header</p>
        <div>{ this.props.children }</div>
        <div>Footer </div>
      </div>
    );
  }
}

export default App;