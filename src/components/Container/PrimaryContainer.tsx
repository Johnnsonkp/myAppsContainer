import { ContainerProps } from './Container.modules'
import React from 'react'
import {styles} from './container.styles'

export const PrimaryContainer: React.FC<ContainerProps> = (props) => {
    return(
        <div style={styles.container}>
            {props.Component}
        </div>
    )
}