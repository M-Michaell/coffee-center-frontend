import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Rating2(props) {
  const { item } = props;

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        value={item.vote_average / 2}
        readOnly
        precision={0.1}
        style={{ color: "black" }}
      />
    </Box>
  );
}
