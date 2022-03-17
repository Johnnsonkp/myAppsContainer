import './App.css';

import React, {useEffect, useState} from 'react';

import {AppstoreOutlined} from '@ant-design/icons';
import { FetchResponse } from './App.modules';
import Icon from '@ant-design/icons';
import { InputType } from './components/common/SearchBar/SearchBar.module';
import { JSXElementConstructor } from 'react';
import MenuDropDown from './components/common/MenuDropdown';
import { MyAppsComponent } from './pages/MyApps';
import NavBar from './components/common/Nav';
import { PrimaryContainer } from './components/Container';
import { SearchBar } from './components/common/SearchBar/SearchBar';

const App: React.FC = () => {
  const [input, searchedInput] = useState<InputType['text']>()
  const [apps, fetchApps] = useState<FetchResponse['results']>()
  const [toggleSidePanel, setToggleSidePanel] = useState<boolean>(false)
  const [hover, isHover] = useState<boolean>(false)
  // const SearchComponent: JSXElementConstructor<p> = () => <SearchOutlined />


  useEffect(() => {
    fetch('apps.json')
      .then(response => response.json())
      .then(response => fetchApps(response))
      .catch(error => console.log(error));
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchedInput(e.target.value)
    apps && apps.map((results) => {
      console.log(results.title === e.target.value)
    })
  }

  return (
    <div className="App">
      <NavBar 
        searchBarComponent={<SearchBar onChange={(e) => handleSearchChange(e)}/>}
        appSidePanelDisplay={<MyAppsComponent apps={apps}/>}
        appsDisplayIcon={<AppstoreOutlined 
          style={{ fontSize: '18px', cursor: 'pointer' }}
          onClick={() => setToggleSidePanel(!toggleSidePanel)}
          onMouseEnter={() => isHover(true)}
          onMouseLeave={() => isHover(false)}
          />}
        setHover={hover}
        effect={toggleSidePanel}
        NavMenu={<MenuDropDown title={'My Apps'}/>}
      />
      <PrimaryContainer 
        Component={<MyAppsComponent apps={apps}/>}
      />
    </div>
  );
}

export default App;
