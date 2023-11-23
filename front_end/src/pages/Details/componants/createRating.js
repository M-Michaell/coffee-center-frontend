import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

export default function RatingSize(props) {
  const { value, onChange, ...other } = props;

  const handleRatingChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Stack spacing={1}>
      <Rating name="size-medium" value={value} onChange={handleRatingChange} {...other} 
      style={{ color: "yellow" }}
      emptyIcon={<StarIcon style={{ opacity: 0.1 ,color:"yellow"}} fontSize="inherit"  />}
      />
    </Stack>
  );
}
