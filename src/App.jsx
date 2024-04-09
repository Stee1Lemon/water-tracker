import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { AppWrapper } from './App.styled';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SignupPage from 'pages/SignupPage/SignupPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import HomePage from 'pages/HomePage/HomePage';
import ForgotPassword from 'pages/ForgotPasswordPage/ForgotPasswordPage';
import PrivateRoute from 'components/auth/PrivateRoute';
import PublicRoute from 'components/auth/PublicRoute';
import { selectUserToken } from './redux/auth/authSelectors';
import { setAuthToken } from './redux/Api/api';
import authApi from './redux/auth/authOperations';
import waterApi from './redux/water/waterOperations';
import { rootSlice } from './redux/root/rootSlice';

// імпорт з .env
// const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
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
  }, [token, dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
