import { Navigate, Outlet } from "react-router-dom";

const OrderGuard = () => {
  const visitedHome = sessionStorage.getItem("visitedHome") === "true";
  return visitedHome ? <Outlet /> : <Navigate to="/" replace />;
};

export default OrderGuard;