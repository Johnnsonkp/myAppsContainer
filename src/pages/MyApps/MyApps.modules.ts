export interface MyAppsProps {
    title: string
    titleStyles?: React.CSSProperties
    onHover?: () => void
    image: string
    styles?: React.CSSProperties
    imageStyle?: React.CSSProperties
    effect?: boolean
    className?: string | undefined
}