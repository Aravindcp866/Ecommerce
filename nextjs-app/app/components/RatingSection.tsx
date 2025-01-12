
import * as React from 'react';
import Rating from '@mui/material/Rating';


export default function RatingSection() {
  return (


    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

  );
}