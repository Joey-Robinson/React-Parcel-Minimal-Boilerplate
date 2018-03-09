import React, { Component } from 'react'
import { hot} from 'react-hot-loader';
import './styles/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi, this is a minimal React Boilerplate</h1>
        <p>This has support for s/css and has hot loading enabled. Enjoy</p>
      </div>
    );
  }
};

export default hot(module)(App);