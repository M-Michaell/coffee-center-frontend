import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';

export default function Rating2(props) {
  const { rate } = props;

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        value={Number(rate) }
        readOnly
        precision={0.1}
        style={{ color: "yellow" }}
        emptyIcon={<StarIcon style={{ opacity: 0.1 ,color:"yellow"}} fontSize="inherit"  />}
      />
    </Box>
  );
}
