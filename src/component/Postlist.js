import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const PostList = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <List>
      {filteredPosts.map((post) => (
        <ListItem key={post.id} className="post-item">
          <ListItemText primary={post.title} secondary={post.body} />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
