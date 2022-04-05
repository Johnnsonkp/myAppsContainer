import { MouseEventHandler } from "react";

export interface MenuDropDownProps {
    title: string, 
    menuItem1?: string,
    menuItem1Icon?: JSX.Element
    menuItem1IconFunc?: JSX.Element
    menuItem2?: string, 
    menuItem2Icon?: JSX.Element
    menuItem2IconFunc?: JSX.Element
    menuItemId?: number
    menuItem3?: string, 
    menuItem1Click?: MouseEventHandler<Element> | any
    menuItem2Click?: MouseEventHandler<Element> | any
    dropDownIcon?: JSX.Element
    setFormToggler?: React.Dispatch<React.SetStateAction<boolean>> | void
}