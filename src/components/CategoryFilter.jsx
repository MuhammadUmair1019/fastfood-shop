import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          <h3 className="font-bold text-base text-gray-800">Categories</h3>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {categoryTitle.map((category, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg transition-all cursor-pointer ${
              selectedCategories.includes(category)
                ? "bg-blue-50 border border-blue-300 shadow-sm"
                : "bg-gray-50 border border-transparent hover:bg-gray-100 hover:border-gray-200"
            }`}
            onClick={() => onChangeCategory(category, !selectedCategories.includes(category))}
          >
            <Checkbox
              text={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => {
                e.stopPropagation();
                onChangeCategory(category, e.target.checked);
              }}
              checkboxClassName={
                selectedCategories.includes(category)
                  ? "text-blue-600 border-blue-600 focus:ring-blue-500"
                  : "text-gray-400 border-gray-300 focus:ring-blue-500"
              }
              labelClassName={
                selectedCategories.includes(category)
                  ? "text-gray-800 font-semibold"
                  : "text-gray-700"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
