import { FC } from "react";
import { Navigate, Outlet, RoutesProps, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/index";

interface IPrivateRoute extends RoutesProps {}

const PrivateRoute: FC<IPrivateRoute> = () => {
  const location = useLocation();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
