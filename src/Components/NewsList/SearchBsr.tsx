'use client';
import React from 'react';
import { Input } from '../ui/input';

interface SearchBsrProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBsr = ({ onSearch }: SearchBsrProps) => {
  return (
    <div className="md:w-3/4">
      <h2 className="text-xl mb-2"> Search News</h2>
      <Input
        type="text"
        onChange={e => onSearch(e.target.value)}
        placeholder="Search News ...."
        className="p-2 border rounded-md w-full"
      ></Input>
    </div>
  );
};

export default SearchBsr;
