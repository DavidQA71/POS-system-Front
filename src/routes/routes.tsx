import type { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import Layout from "../components/Layout/Layout";
import HomeProvider from "../context/HomeContext";


const routes: RouteObject[] = [{
  path: '/',
  element: <Layout />,
  children: [{
      index: true,
      element: <LoginPage />,
    },
    {
      path: 'HomePage',
      element: (
        <HomeProvider>
          <HomePage />
        </HomeProvider>
      ) 
    }
  ]
}];

export default routes;