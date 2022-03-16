import AppsLogo from './APPs.svg'
import { NavBarProps } from './NavBar.types';
import React from 'react';
import { navBarStyles } from './NavBar.styles';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div style={navBarStyles.display}>
            <div style={props.setHover? navBarStyles.onMouseEnter : navBarStyles.onMouseLeave}>
                {props.appsDisplayIcon}
                <img src={AppsLogo} style={navBarStyles.AppLogo}/>
            </div>
            
                {props.effect && <div style={navBarStyles.effectStyle}>
                        <span 
                            style={props.setHover? navBarStyles.onMouseEnter : navBarStyles.onMouseLeave}
                        >
                            {props.appsDisplayIcon}
                        </span>
                        <h2 style={{paddingLeft: '10px'}}>Apps</h2>
                        <div style={{transform: 'scale(0.6)', display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', left: '-15px'}}>
                            
                            {props.appSidePanelDisplay}
                        </div>
                    </div>
                }
                {/* <img src={AppsLogo} style={navBarStyles.AppLogo}/> */}
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