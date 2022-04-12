export interface AuthProps {
    title?: string
    style?: React.CSSProperties
    loginToggle?: React.Dispatch<React.SetStateAction<boolean>>
    login?: boolean
}