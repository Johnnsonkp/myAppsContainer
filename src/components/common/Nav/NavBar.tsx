import AppsLogo from './APPs.svg'
import { MyAppsComponent } from '../../../pages/MyApps';
import { NavBarProps } from './NavBar.types';
import React from 'react';
import { navBarStyles } from './NavBar.styles';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div style={navBarStyles.display}>
            <div >
                {props.appsDisplayIcon}
            </div>
            
            {props.effect && <div style={{ position: 'absolute', top: '5px', left: '5px', height: '200px', width: '250px', border: '1px solid red', background: '#fff', zIndex: '2'}}>
                    <div style={{padding: '10px'}}>
                        {props.appsDisplayIcon}
                    </div>
                    <h2 style={{paddingLeft: '10px'}}>Apps</h2>
                    <div style={{transform: 'scale(0.6)', display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', left: '-15px'}}>
                        
                        {props.appSidePanelDisplay}
                    </div>
                </div>
            }
            <img src={AppsLogo} style={navBarStyles.AppLogo}/>
            <div>
                {props.searchBarComponent}
            </div>
            <div>
                User
            </div>
        </div>
    )
}
export default NavBar