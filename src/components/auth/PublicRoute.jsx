import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectUserToken,
} from '../../redux/auth/authSelectors';

const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isAuthenticated = useSelector(selectUserToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRedirected = isAuthenticated && isLoggedIn && restricted;

  return isRedirected ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
