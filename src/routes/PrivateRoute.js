import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const data = JSON.parse(sessionStorage.getItem("user"));

  return data && data.token ? <Outlet /> : <Navigate to="/menu" />;
}

export default PrivateRoute;
