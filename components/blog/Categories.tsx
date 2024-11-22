'use client';

import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'arquitectura', name: 'Arquitectura' },
  { id: 'construccion', name: 'Construcción' },
  { id: 'ingenierias', name: 'Ingenierías' },
  { id: 'interiores', name: 'Interiores Corporativos' },
  { id: 'business', name: 'Business Development' },
  { id: 'scrum', name: 'Scrum y Metodologías Ágiles' }
];

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  return (
    <div className="w-full overflow-x-auto py-4 mb-8">
      <div className="flex space-x-2 min-w-max px-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onSelectCategory(category.id)}
            className="whitespace-nowrap"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;