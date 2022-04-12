import "./MyApps.scss";

import { MyAppsProps } from './MyApps.modules'
import React from 'react'

export const MyApps: React.FC<MyAppsProps> = (props) => {
    return (
        <>
            <a 
                style={props.styles} 
                className={props.className}
                href={props.url}
            >
                <img src={props.image} style={props.imageStyle}/>
                <span style={props.titleStyles}>{props.title}</span>
                <span className="elipsesStyle" style={props.elipsisStyle}>{props.MenuDropDown}</span>
            </a>
        </>
    )
}

