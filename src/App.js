import React, { Component } from 'react';
import './styles/style.scss';
import Sidebar from './components/sidebar';
import Introduction from './components/sidebar';
import About from './components/sidebar';
import Projects from './components/sidebar';
import Blog from './components/sidebar';
import Timeline from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Sidebar></Sidebar>
          <div className="main">
            <Introduction></Introduction>
            <About></About>
            <Projects></Projects>
            <Blog></Blog>
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
