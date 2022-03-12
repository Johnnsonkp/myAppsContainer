export interface MyAppsProps {
    title: string
    titleStyles?: React.CSSProperties
    onHover?: () => void
    image: string
    styles?: React.CSSProperties
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
    imageStyle?: React.CSSProperties
}