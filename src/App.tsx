import './App.css';

import * as styles from './components/common/SearchBar/searchBar.styles'

import NavBar from './components/common/Nav';
import React from 'react';
import { SearchBar } from './components/common/SearchBar/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar searchBarComponent={<SearchBar/>}/>
      <h1>App container</h1>
    </div>
  );
}

export default App;
