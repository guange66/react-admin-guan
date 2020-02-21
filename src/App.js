import React, { Component } from 'react';
import './App.css';
import './style/guan.less';
import './style/layout.less';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


export default App;
