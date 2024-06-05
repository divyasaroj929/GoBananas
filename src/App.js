import React, { useState } from "react";
import { Container } from "@mui/material";
import PostList from "./component/Postlist";
import SearchBar from "./component/SearchBar";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container className="container">
      <h1>Post List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PostList searchTerm={searchTerm} />
    </Container>
  );
}

export default App;
