import React, { Component } from 'react';
import SearchBar from './search_bar';
import SearchResultList from './search_result_list';
import '../stylesheet/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar/>
        <SearchResultList/>
      </div>
    );
  }
}

export default App;
