import './App.css';

import {AppstoreOutlined, DownOutlined, PlusOutlined} from '@ant-design/icons';
import { FormToggle, FormToggleButtonComp } from './components/common/Buttons';
import React, {useCallback, useEffect, useState} from 'react';
import { customFetch, customURL, loadApps } from './services/appServices';

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
  const [refresh, setRefresh] = useState<boolean>(true)
  const [appsGroups, setAppsGroup] = useState<string>('All apps')

  useEffect(() => {
    if(refresh){
      console.log('refresh:', refresh)
      loadApps(customURL).then((appsData) => fetchApps(appsData))
    }
    setRefresh(false)
  }, [refresh])


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
        NavMenu={<MenuDropDown dropDownIcon={<DownOutlined />} title={'My Apps'} />}
      />
    )
  }

  return (
    <div className="App">
      <NavComponent />
      <MyAppsComponent 
        apps={apps} 
        refresh={refresh} 
        setRefresh={setRefresh} 
        appsGroups={appsGroups}
        setFormToggler={setFormToggler}
      />
        <FormToggle
          formToggler={formToggler} 
          setFormToggler={setFormToggler}
        />
        <AppForm formToggle={formToggler} apps={apps}/>
    </div>
  );
}

export default App;
