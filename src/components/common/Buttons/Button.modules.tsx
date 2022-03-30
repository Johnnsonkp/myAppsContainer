export interface ButtonsProps {
    icon?: JSX.Element
    style?: React.CSSProperties | undefined
    formToggler?: boolean
    onClickFunc?: React.MouseEventHandler<HTMLElement> | undefined
    onClick?: React.Dispatch<React.SetStateAction<boolean>> | void
    setFormToggler?: React.Dispatch<React.SetStateAction<boolean>> | void
    // setFormToggler?: boolean
}