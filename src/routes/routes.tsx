import type { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import Layout from "../components/Layout/Layout";


const routes: RouteObject[] = [{
  path: '/',
  element: <Layout />,
  children: [{
      index: true,
      element: <LoginPage />,
    },
/*     {
      path: 'homepage',
      element: <HomePage />
    },
    {
      path: 'dashboard/:username',
      element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
    },
    {
      path: '*',
      element: <NotFoundPage />
    }, */
  ]
}];

export default routes;