import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderCombined from 'components/Header/HeaderCombined';
// import ModalTest from 'components/ModalTest/ModalTest';
// import ModalTeam from 'components/ModalTeam/ModalTeam';

const SharedLayout = () => {
  return (
    <>
      <HeaderCombined />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <ModalTeam /> */}
    </>
  );
};

export default SharedLayout;
