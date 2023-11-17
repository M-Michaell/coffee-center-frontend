import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./pagination.css"
export default function PaginationControlled(props) {
  const { handleChange, page, counter } = props;

  return (
    <Stack spacing={1}>
      <Pagination
        showFirstButton
        count={counter}
        page={page}
        siblingCount={1}
        onChange={handleChange}
        variant="outlined"
        color="warning"
        boundaryCount={0}
      />
    </Stack>
  );
}
