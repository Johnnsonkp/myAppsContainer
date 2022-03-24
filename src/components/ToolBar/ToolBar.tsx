import { ColumnContainer, PrimaryContainer } from "../Container"

import { ToolBarProps } from "./ToolBar.modules"
import {styles} from './ToolBar.styles'

const ComponentContainer: React.FC<ToolBarProps> = (props) => {
    return(
        <div>{props.component}</div>
    )
}
export const ToolBar: React.FC<ToolBarProps> = (props) => {
    return(
        <div style={styles.container}>{props.component}</div>
    )
}
export const RowToolBar: React.FC<ToolBarProps> = (props) => {
    return(
        <div style={styles.columnContainer}>{props.component}</div>
    )
}