import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useSelector((state) => state.authTest.auth);

  return isAuthenticated ? <Component /> : <Navigate to="/singin" />;
};

export default PrivateRoute;
