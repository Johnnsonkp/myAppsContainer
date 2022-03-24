import { ContainerProps } from './Container.modules'
import React from 'react'
import {styles} from './container.styles'

export const ColumnContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div style={styles.columnContainer}>
            {props.Component}
        </div>
    )
}