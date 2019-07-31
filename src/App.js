import React, { Component } from 'react';
import Header from './components/header/Header.js';
import Home from './pages/home/Home.js';
import Login from './pages/login/Login.js';
import TestList from './pages/testList/TestList.js';

class App extends Component {
  state = {
    activePage: 'home',
    pages: [
      { id: 'home', name: 'Home', component: <Home /> },
      { id: 'login', name: 'Login', component: <Login /> },
      { id: 'test-list', name: 'Tests', component: <TestList /> }
    ]
  }

  switchPage = ( pageId ) => {
    if ( this.state.pages.filter( page => page.id === pageId ).length === 0 ) {
      return;
    }
    return this.setState({
      activePage: pageId
    });
  }

  render() {
    return (
      <div id="App">
        <Header pages={this.state.pages}
                activePage={this.state.activePage}
                switchPage={this.switchPage} />
        { this.state.pages.filter( page => page.id === this.state.activePage)[0].component }
      </div>
    );
  }
}

export default App;