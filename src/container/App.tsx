import * as React from 'react';

class App extends React.Component {
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