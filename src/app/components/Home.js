import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <h1>This is Home page</h1>
      <h1>This is Home page</h1>
      <h1>This is Home page</h1>
      {/* updated version 1 */}
      <h1>This is Home page</h1>
      <h1>This is Home page</h1>
      {/* updated version 2 */}
      <h1>This is Home page</h1>
      <h1>This is Home page</h1>
      {/* updated version 3 */}
      <h1>This is Home page</h1>
      <h1>This is Home page</h1>
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
