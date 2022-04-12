import { FetchResponse } from "../../../App.modules";

export interface FormProps {
    title?: string
    styles?: React.CSSProperties
    formToggle?: boolean
    updateFormToggle?: boolean
    form?: any
    apps?: FetchResponse['results']
    group?: string
    url?: string
    image?: any
    id?: number
}