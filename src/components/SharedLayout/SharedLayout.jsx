import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderCombined from 'components/Header/HeaderCombined';
import { AuthTest } from 'components/AuthTest/AuthTest';
import ModalTest from 'components/ModalTest/ModalTest';

const SharedLayout = () => {
  return (
    <>
      <AuthTest />
      <ModalTest />
      <HeaderCombined />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
