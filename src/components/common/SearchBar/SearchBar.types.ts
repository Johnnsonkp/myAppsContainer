import React from 'react';
import { ReactElement } from 'react';

export interface SearchBarProps {
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit?: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchIcon?: any
}
