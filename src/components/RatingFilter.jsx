import Rating from "./Rating";

const RatingFilter = ({ onChangeRating, selectedRating }) => {
  return (
    <div className="h-48 p-5 cursor-pointer space-y-2  border border-gray-200 shadow-lg rounded-md">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div
          className="flex items-center gap-2 hover:opacity-80"
          key={rating}
          onClick={() => onChangeRating(rating)}
        >
          <Rating
            stars={Array(5).fill(rating)}
            ratingClassName={`${
              rating == selectedRating ? " !text-[#ff3d47]" : ""
            }`}
          />
          <p className="text-gray-400">
            {rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
