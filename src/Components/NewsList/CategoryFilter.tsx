import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
interface CategoryProps {
  onCategory: (category: string) => void;
}

const CategoryFilter = ({ onCategory }: CategoryProps) => {
  const categories = ['all', 'tech', 'health', 'sports', 'business'];
  return (
    <div>
      <h2 className="text-xl mb-2">Filter Ny Category</h2>
      <Select onValueChange={value => onCategory(value === 'all' ? '' : value)}>
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(category => (
            <SelectItem className="capitalize" key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
