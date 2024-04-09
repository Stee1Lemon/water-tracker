import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderCombined from 'components/Header/HeaderCombined';
import Loader from 'components/Loader/Loader';
// import ModalTest from 'components/ModalTest/ModalTest';
// import ModalTeam from 'components/ModalTeam/ModalTeam';

const SharedLayout = () => {
  return (
    <>
      <HeaderCombined />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <ModalTeam /> */}
    </>
  );
};

export default SharedLayout;
