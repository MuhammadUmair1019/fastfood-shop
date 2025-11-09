const RatingFilter = ({ onChangeRating, selectedRating }) => {
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ));
  };

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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <h3 className="font-bold text-base text-gray-800">Rating</h3>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div
            className={`flex items-center justify-between cursor-pointer p-3 rounded-lg transition-all ${
              rating === selectedRating
                ? "bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 shadow-sm"
                : "bg-gray-50 border border-transparent hover:bg-gray-100 hover:border-gray-200"
            }`}
            key={rating}
            onClick={() => onChangeRating(rating === selectedRating ? "" : rating)}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">{renderStars(rating)}</div>
              <p
                className={`text-sm font-semibold ${
                  rating === selectedRating ? "text-blue-800" : "text-gray-700"
                }`}
              >
                {rating === 5 ? "5.0" : rating.toFixed(1) + " & Up"}
              </p>
            </div>
            {rating === selectedRating && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;

