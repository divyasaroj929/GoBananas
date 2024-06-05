import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
