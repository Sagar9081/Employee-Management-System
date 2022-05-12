import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Pages/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
