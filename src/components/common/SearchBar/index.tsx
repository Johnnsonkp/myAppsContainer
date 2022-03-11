import React from 'react';
import { SearchBar } from './SearchBar';

export const searchBarComponent = () => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <SearchBar onChange={(e) => handleSearchChange(e)}/>
    )
}