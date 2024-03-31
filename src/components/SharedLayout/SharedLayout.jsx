import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { HeaderSigned } from 'components/Header/HeaderSigned';
import { AuthTest } from 'components/AuthTest/AuthTest';

const SharedLayout = () => {
  return (
    <>
      <AuthTest />
      <Header />
      <HeaderSigned />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
