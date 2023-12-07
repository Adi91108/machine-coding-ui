import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleStarOver = (selectedRating) => {
    setRatingHover(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`star ${index < rating ? "star-filled" : ""} ${
            index < ratingHover ? "star-filled" : ""
          }`}
          onClick={() => handleStarClick(index + 1)}
          onMouseOver={() => handleStarOver(index + 1)}
          onMouseOut={() => setRatingHover(0)}
        />
      ))}
      <div>
      <p>Your rating: {rating}</p>
      <p>Your hover rating: {ratingHover}</p>
        
      </div>
    </div>
  );
};

export default StarRating;
