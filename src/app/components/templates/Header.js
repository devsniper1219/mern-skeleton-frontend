import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logout } from "../../slices/auth";
import EventBus from "../../common/EventBus";

const Header = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                bezKoder
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                    Home
                </Link>
                </li>

                {showModeratorBoard && (
                <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">
                    Moderator Board
                    </Link>
                </li>
                )}

                {showAdminBoard && (
                <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                    Admin Board
                    </Link>
                </li>
                )}

                {currentUser && (
                <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                    User
                    </Link>
                </li>
                )}
            </div>

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={logOut}>
                    LogOut
                    </a>
                </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                    Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                    Sign Up
                    </Link>
                </li>
                </div>
            )}
            </nav>
        </div>
    )
}

export default Header