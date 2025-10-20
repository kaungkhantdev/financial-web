import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Loading from '../common/Loading';

function MainLayout() {
  return (
    <div className="flex w-full min-h-screen mx-auto">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default MainLayout;