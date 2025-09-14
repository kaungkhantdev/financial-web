import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Loading from '../common/Loading';

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default MainLayout;