import NotFound from "@/components/common/NotFound";
import { ROUTES } from "@/utils/constants";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const MainLayout = lazy(() => import('@/components/layouts/MainLayout'));
const FinancePage = lazy(() => import('@/features/finance/page/FinancePage'));
const WalletPage = lazy(() => import('@/features/wallet/page/WalletPage'));
const AnalysisPage = lazy(() => import('@/features/analysis/page/AnalysisPage'));
const TransitionPage = lazy(() => import('@/features/transition/page/TransitionPage'));
const SettingPage = lazy(() => import('@/features/setting/page/SettingPage'));

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
        {
          index: true,
          path: ROUTES.HOME,
          Component: FinancePage,
        },
        {
          path: ROUTES.WALLET,
          Component: WalletPage,
        },
        {
          path: ROUTES.ANALYSIS,
          Component: AnalysisPage,
        },
        {
          path: ROUTES.TRANSACTION,
          Component: TransitionPage,
        },
        {
          path: ROUTES.SETTING,
          Component: SettingPage,
        },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  }
]);

export default router;

