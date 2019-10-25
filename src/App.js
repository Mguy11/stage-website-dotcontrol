import React, { Component } from 'react';
import './styles/style.scss';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
            <Sidebar/>
        </div>
      </div>
    );
  }
}

export default App;
