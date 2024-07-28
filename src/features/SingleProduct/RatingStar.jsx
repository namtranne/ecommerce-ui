// RatingStars.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ ratingAverage }) => {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(ratingAverage);
  const halfStars = ratingAverage % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="rating-stars mx-2">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-500"
        />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarEmpty}
          className="text-gray-300"
        />
      ))}
    </div>
  );
};

export default RatingStars;
