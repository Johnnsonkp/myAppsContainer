import { IconProps } from "./Icons.modules";

export const SearchBarComponent: React.FC<IconProps> = (props) => {
    return(
        <div>
            {props.Search}
        </div>
    )
}
// export const SearchBarComponentContainer: React.FC = () => {
//     return(
//         <SearchBarComponent Search={SearchOutlined}/>
//     )
// }