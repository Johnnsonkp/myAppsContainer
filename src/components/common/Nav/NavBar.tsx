import AppsLogo from './APPs.svg'
import DisplayBadge from '../Badge';
import { NavBarProps } from './NavBar.types';
import React from 'react';
// import appsLogo from './appsLogo.png'
import appsLogo from './appsTechLogo.png'
import { navBarStyles } from './NavBar.styles';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div style={navBarStyles.display}>
            <div style={props.setHover? navBarStyles.onMouseEnter : navBarStyles.onMouseLeave}>
                {props.appsDisplayIcon}
                {/* <img src={AppsLogo} style={navBarStyles.AppLogo}/> */}
                <img src={appsLogo} style={navBarStyles.AppLogo}/>
                <span style={{marginLeft: '25px'}}>{props.NavMenu}</span>
            </div>
                {props.effect && <div style={navBarStyles.effectStyle}>
                        <span 
                            style={props.setHover? navBarStyles.onMouseEnter : navBarStyles.onMouseLeave}
                        >
                            {props.appsDisplayIcon}
                        </span>
                        <h2 style={{paddingLeft: '10px', marginTop: '20px'}}>Apps</h2>
                        <div style={{transform: 'scale(0.6)', display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', left: '-15px'}}>
                            {props.appSidePanelDisplay}
                        </div>
                    </div>
                }
            <div style={{flex: '0.45', justifyContent: 'flex-start', position: 'relative', right: '10%'}}>
                {props.searchBarComponent}
            </div>
            <div>
                <DisplayBadge />
            </div>
        </div>
    )
}
export default NavBar