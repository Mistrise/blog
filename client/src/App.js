import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Создать пост</h1>
      <PostCreate />
      <hr />
      <h1>Посты</h1>
      <PostList />
    </div>
  );
};
export default App;
