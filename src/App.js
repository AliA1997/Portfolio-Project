import React, { Component } from 'react';
// import logo from './logo.svg';
import routes from './routes';
import Navbar from './components/presentational/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
