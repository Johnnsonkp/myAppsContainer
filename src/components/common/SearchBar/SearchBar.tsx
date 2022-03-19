import { Input } from 'antd';
import React from 'react';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = (props) => {
    const { Search } = Input
    return  (
        <Search 
            placeholder="Search apps" 
            className={props.className} 
            onChange={props.onChange}
            style={props.style}
        />
    )
}
