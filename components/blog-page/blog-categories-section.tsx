import React from "react";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface BlogCategoriesProps {
  categories?: Category[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories = [], selectedCategory = "all", onCategoryChange }) => {
  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="bg-white py-8 border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`shrink-0 px-6 py-2 rounded-full font-body text-sm transition-colors ${selectedCategory === category.id ? "bg-secondary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
