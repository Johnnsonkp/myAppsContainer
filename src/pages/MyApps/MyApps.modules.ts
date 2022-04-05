export interface MyAppsProps {
    title: string
    titleStyles?: React.CSSProperties
    onHover?: () => void
    image: string
    styles?: React.CSSProperties
    imageStyle?: React.CSSProperties
    effect?: boolean
    className?: string | undefined
    deleteButton?: JSX.Element
    refresh?: boolean
    setRefresh?: boolean
    url?: any
    elipsis?: JSX.Element
    elipsisStyle?: React.CSSProperties
    MenuDropDown?: JSX.Element
    setFormToggler?: React.Dispatch<React.SetStateAction<boolean>> | void
}