import { FetchResponse } from "../../../App.modules";

export interface FormProps {
    title?: string
    styles?: React.CSSProperties
    formToggle?: boolean
    form?: any
    apps?: FetchResponse['results']
}