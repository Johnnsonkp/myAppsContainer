import { FetchResponse } from '../../../App.modules';
import React from 'react';

export interface NavBarProps {
    searchBarComponent?: JSX.Element
    appSidePanelDisplay? : FetchResponse['results'] | JSX.Element
    appsDisplayIcon? : JSX.Element
    // onClick? : (e: React.MouseEvent<HTMLInputElement>) => void
    setEffect? : boolean | void
    effect?: boolean
    setHover?:  React.SetStateAction<boolean> 
}
