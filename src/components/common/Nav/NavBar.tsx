import AppsLogo from './APPs.svg'
import { NavBarProps } from './NavBar.types';
import React from 'react';
import { navBarStyles } from './NavBar.styles';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div style={navBarStyles.display}>
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