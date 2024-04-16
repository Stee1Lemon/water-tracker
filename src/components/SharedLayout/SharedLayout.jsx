import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderCombined from 'components/Header/HeaderCombined';
import Loader from 'components/Loader/Loader';
import { BackGround } from './SharedLayout.styled';
import ModalTeam from 'components/ModalTeam/ModalTeam';

const SharedLayout = () => {
  const [background, setBackground] = useState('welcome');
  const location = useLocation();

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
  }, [location.pathname]);
  return (
    <>
      <BackGround $page={background}>
        <HeaderCombined />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ModalTeam />
      </BackGround>
    </>
  );
};

export default SharedLayout;
