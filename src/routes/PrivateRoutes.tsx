import type { FC } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: FC = () => {
  const isAuthenticated = true; // логика проверки аутентификации пользователя
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
