import { useSelector } from 'react-redux';
import { HeaderSigned } from './HeaderSigned/HeaderSigned';
import { Header } from './Header/Header';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const HeaderCombined = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return <>{isAuthenticated ? <HeaderSigned /> : <Header />}</>;
};

export default HeaderCombined;
