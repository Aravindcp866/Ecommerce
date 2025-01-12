'use client';
import React, { useState } from 'react';

export default function RatingSection({ totalStars = 5, onRatingChange, mode = 'readonly', initialRating = 0 }: any) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRating = (rate: any) => {
    if (mode !== 'readonly') {
      setRating(rate);
      if (onRatingChange) {
        onRatingChange(rate);
      }
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-2xl ${mode !== 'readonly' ? 'cursor-pointer' : ''} transition-colors duration-200 ${starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => mode !== 'readonly' && setHover(starValue)}
            onMouseLeave={() => mode !== 'readonly' && setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
