import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector((state) => state.authTest.auth);
  const isRedirected = isLoggedIn && restricted;

  return isRedirected ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
