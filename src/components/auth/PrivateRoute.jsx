import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserToken,
} from '../../redux/auth/authSelectors';

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useSelector(selectUserToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn && isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/singin" />
  );
};

export default PrivateRoute;
