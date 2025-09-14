import NotFound from "@/components/common/NotFound";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const MainLayout = lazy(() => import('@/components/layouts/MainLayout'));
const FinancePage = lazy(() => import('@/features/finance/page/FinancePage'));

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
        {
          index: true,
          path: '',
          Component: FinancePage,
        },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  }
]);

export default router;

