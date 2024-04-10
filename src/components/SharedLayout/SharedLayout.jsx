import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderCombined from 'components/Header/HeaderCombined';
import Loader from 'components/Loader/Loader';
import { BackGround } from './SharedLayout.styled';
import ModalTeam from 'components/ModalTeam/ModalTeam';

const SharedLayout = ({ page }) => {
  
  return (
    <>
      <BackGround $page={page}>
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
