import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className={styles.header}>foood</h2>
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
