import { SidePanelAppProps } from "./SidePanelAppModuels"
export const SidePanelApp: React.FC<SidePanelAppProps> = (props) => {
    return (
        <div>
            <a 
                style={props.styles} 
                href={props.url}
                key={props.key}
            >
                <img src={props.image} style={props.imageStyle}/>
                <span style={props.titleStyles}>{props.title}</span>
            </a>
        </div>
    )
}