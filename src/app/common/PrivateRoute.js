import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { isLoggedIn: currentUser } = useSelector((state) => state.auth);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
