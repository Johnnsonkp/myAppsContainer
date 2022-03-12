import './App.css';

import React, {useEffect, useState} from 'react';

import { InputType } from './components/common/SearchBar/SearchBar.module';
import { MyAppsComponent } from './pages/MyApps';
import NavBar from './components/common/Nav';
import { PrimaryContainer } from './components/Container';
import { SearchBar } from './components/common/SearchBar/SearchBar';

const App: React.FC = () => {
  const [input, searchedInput] = useState<InputType['text']>()
  const [apps, fetchApps] = useState<() => Promise<string>>()


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchedInput(e.target.value)
  }

  useEffect(() => {
    fetch('./apps.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json)
    .then((data) => fetchApps(data))
  }, [])

  return (
    <div className="App">
      <NavBar searchBarComponent={<SearchBar onChange={(e) => handleSearchChange(e)}/>}/>
      <PrimaryContainer 
        Component={<MyAppsComponent apps={apps}/>}
      />
    </div>
  );
}

export default App;
