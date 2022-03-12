import { MyAppsProps } from './MyApps.modules'
import React from 'react'

export const MyApps: React.FC<MyAppsProps> = (props) => {

    return (
        <div style={props.styles} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <img src={props.image} style={props.imageStyle}/>
            <span style={props.titleStyles}>{props.title}</span>
        </div>
    )
}