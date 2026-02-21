import type { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import Layout from "../components/Layout/Layout";
import HomeProvider from "../context/HomeContext";
import PosPage from "../pages/pos/PosPage";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />
  },
  {
    element: (
      <HomeProvider>
        <Layout />
      </HomeProvider>
    ),
    children: [
      {
        path: 'homePage',
        element: <HomePage />
      },
      {
        path: 'caja',
        element: <PosPage />
      }
    ]
  }
];

export default routes;