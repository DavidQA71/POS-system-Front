import { Outlet } from "react-router-dom";
import './Layout.css';
import getMenuItems from '../../helpers/helper';
import SideBar from '../../components/SideBar/SideBar';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { HomeContext } from "../../context/HomeContext";

const Layout = () => {
    const { userInfo } = useContext(HomeContext);
  const { handleLogout } = useContext(AuthContext);
  const menuItems = getMenuItems(userInfo.role, handleLogout);

  return (
  <div className="layoutContainer">
    <aside className="sidebarContainer">
      <SideBar items={menuItems} />
    </aside>

    <div className="contentContainer">
      <Outlet />
    </div>
  </div>
  )
};

export default Layout;