import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { AppWrapper } from './App.styled';
import PrivateRoute from 'components/auth/PrivateRoute';
import PublicRoute from 'components/auth/PublicRoute';
import { selectUserToken } from './redux/auth/authSelectors';
import { setAuthToken } from './redux/Api/api';
import authApi from './redux/auth/authOperations';
import waterApi from './redux/water/waterOperations';
import { rootSlice } from './redux/root/rootSlice';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ForgotPassword = lazy(() =>
  import('pages/ForgotPasswordPage/ForgotPasswordPage')
);

function App() {
  const [background, setBackground] = useState('welcome');
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
    switch (location.pathname) {
      case '/welcome':
        setBackground('welcome');
        break;
      case '/signin':
        setBackground('sign');
        break;
      case '/signup':
        setBackground('sign');
        break;
      case '/home':
        setBackground('home');
        break;
    }
    const firstLogIn = () => {
      if (token) {
        const date = new Date();
        const today = format(date, 'dd/MM/yyyy');
        const month = format(date, 'MM/yyyy');
        setAuthToken(token);
        dispatch(rootSlice.actions.readLang());
        dispatch(authApi.getUserThunk());
        dispatch(waterApi.getMonthWaterThunk({ date: month }));
        dispatch(waterApi.getTodayWaterThunk({ date: today }));
      }
    };
    firstLogIn();
  }, [token, dispatch, background, location.pathname]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout page={background} />}>
          <Route element={<PublicRoute restricted redirectTo="/home" />}>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
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
