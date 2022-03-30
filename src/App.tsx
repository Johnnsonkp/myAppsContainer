import './App.css';

import {AppstoreOutlined, PlusOutlined} from '@ant-design/icons';
import { FormToggle, FormToggleButtonComp } from './components/common/Buttons';
import React, {useEffect, useState} from 'react';

import { AppForm } from './components/common/forms';
import { Button } from 'antd';
import { FetchResponse } from './App.modules';
import { InputType } from './components/common/SearchBar/SearchBar.module';
import MenuDropDown from './components/common/MenuDropdown';
import { MyAppsComponent } from './pages/MyApps';
import NavBar from './components/common/Nav';
import { SearchBar } from './components/common/SearchBar/SearchBar';

const App: React.FC = () => {
  const [input, searchedInput] = useState<InputType['text']>()
  const [apps, fetchApps] = useState<FetchResponse['results']>()
  const [toggleSidePanel, setToggleSidePanel] = useState<boolean>(false)
  const [hover, isHover] = useState<boolean>(false)
  const [formToggler, setFormToggler] = useState<boolean>(false)

  const loadApps = async () => {
      // const response = await fetch('apps.json')
      const response = await fetch('http://localhost:3000/appsarray/')
      const data = await response.json()
      const appsData = await data

      return fetchApps(appsData)
  }

  useEffect(() => {
    loadApps()
  }, [])

  const createSprintComponent = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        id: 13, 
        title: "sprints component", 
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      })
    };
    return fetch('http://localhost:3000/appsarray/', requestOptions)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        console.log('apps:', apps)
      })
      .then(() => loadApps())
      .catch((response) => {
        console.error(response.error)
      })
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchedInput(e.target.value)
    apps && apps.map((results) => {
      console.log(results.title === e.target.value)
    })
  }
  const NavComponent = () => {
    return (
      <NavBar 
        searchBarComponent={<SearchBar onChange={(e) => handleSearchChange(e)}/>}
        appSidePanelDisplay={<MyAppsComponent apps={apps} />}
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
    )
  }

  return (
    <div className="App">
      <NavComponent />
      <MyAppsComponent apps={apps} />
        <FormToggle
          formToggler={formToggler} 
          setFormToggler={setFormToggler}
        />
        <AppForm formToggle={formToggler}/>
    </div>
  );
}

export default App;
