import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { HeaderSigned } from 'components/Header/HeaderSigned';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <HeaderSigned />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
