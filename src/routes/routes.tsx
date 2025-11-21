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
  ]
}];

export default routes;