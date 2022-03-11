import React from 'react';

export interface SearchBarProps {
    className?: string
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
