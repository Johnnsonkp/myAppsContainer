import * as styles from './searchBar.styles'

import { Input } from 'antd';
import React from 'react';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = (props) => {
    
    return  (
        <>
            <div>{props.searchIcon}</div>
            <Input 
                placeholder="Basic usage" 
                className={props.className} 
                style={styles.searchBarStyle.display}
                onChange={props.onChange}
            />
        </>
    )
}
