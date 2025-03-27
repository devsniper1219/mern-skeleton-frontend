import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import BoardUser from "./app/components/BoardUser";
import BoardModerator from "./app/components/BoardModerator";
import BoardAdmin from "./app/components/BoardAdmin";

import PrivateRoute from "./app/common/PrivateRoute";
import Header from "./app/components/templates/Header";

const App = () => {
  return (
    <Router>
        <Header></Header>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />
            </Route>
          </Routes>
        </div>
    </Router>
  );
};

export default App;
