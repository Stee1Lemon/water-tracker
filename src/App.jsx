import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SignupPage from 'pages/SignupPage/SignupPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import HomePage from 'pages/HomePage/HomePage';
import PrivateRoute from 'components/auth/PrivateRoute';
import PublicRoute from 'components/auth/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserToken } from './redux/auth/authSelectors';
import { setAuthToken } from './redux/Api/api';
import authApi from './redux/auth/authOperations';
import { useEffect } from 'react';

// імпорт з .env
// const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      dispatch(authApi.getUserThunk());
      console.log('if at app');
    }
  }, [token, dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute restricted redirectTo="/home" />}>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Route>
          <Route path="/home" element={<PrivateRoute Component={HomePage} />} />
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
