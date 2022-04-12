import './App.css';

import { AppForm, UpdateAppForm } from './components/common/forms';
import {AppstoreOutlined, DownOutlined, PlusOutlined} from '@ant-design/icons';
import { Auth, AuthContainer } from './pages/Auth';
import { FormToggle, FormToggleButtonComp } from './components/common/Buttons';
import React, {useCallback, useEffect, useState} from 'react';
import { customFetch, customURL, loadApps } from './services/appServices';

import { Button } from 'antd';
import { FetchResponse } from './App.modules';
import { InputType } from './components/common/SearchBar/SearchBar.module';
import MenuDropDown from './components/common/MenuDropdown';
import { MyAppsComponent } from './pages/MyApps';
import NavBar from './components/common/Nav';
import { SearchBar } from './components/common/SearchBar/SearchBar';
import { SidePanelAppsComponent } from './components/SidePanelAppDisplay';

const App: React.FC = () => {
  const [input, searchedInput] = useState<InputType['text']>()
  const [apps, fetchApps] = useState<FetchResponse['results']>()
  const [toggleSidePanel, setToggleSidePanel] = useState<boolean>(false)
  const [hover, isHover] = useState<boolean>(false)
  const [formToggler, setFormToggler] = useState<boolean>(false)
  const [updateFormToggler, setUpdateFormToggler] = useState<boolean>(false)
  const [refresh, setRefresh] = useState<boolean>(true)
  const [appsGroups, setAppsGroup] = useState<string>('All apps')
  const [login, setLogin] = useState<boolean>(false)

  useEffect(() => {
    if(refresh){
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
        appSidePanelDisplay={<SidePanelAppsComponent apps={apps} />}
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
      {!login? 
        <AuthContainer login={login} loginToggle={setLogin}/>
        : 
        <>
          <NavComponent />
          <MyAppsComponent 
            apps={apps} 
            refresh={refresh} 
            setRefresh={setRefresh} 
            appsGroups={appsGroups}
            setFormToggler={setFormToggler}
            setUpdateFormToggler={setUpdateFormToggler}
            updateFormToggler={updateFormToggler}
          />

          <FormToggle
            formToggler={formToggler} 
            updateFormToggler={updateFormToggler}
            setUpdateFormToggler={setUpdateFormToggler}
            setFormToggler={setFormToggler}
          />
          <AppForm formToggle={formToggler} apps={apps}/>
        </>
      }
        {/* <FormToggle
          formToggler={formToggler} 
          updateFormToggler={updateFormToggler}
          setUpdateFormToggler={setUpdateFormToggler}
          setFormToggler={setFormToggler}
        />
        <AppForm formToggle={formToggler} apps={apps}/> */}
    </div>
  );
}

export default App;
