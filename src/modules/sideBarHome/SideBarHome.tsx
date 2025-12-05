import SideBar from '../../components/SideBar/SideBar';
import './SideBarHome.css';
import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';

const SideBarHome = () => {
  const { isAdmin } = useContext(HomeContext);

  const menuItems = [
    { path: '/caja', label: 'Caja' },
    { path: '/stock', label: 'Stock' },
    ...(isAdmin ? [{path: '/admUsuarios', label: 'Admin Usuarios'}] : [])
  ]

  return(
    <div>
      <SideBar items={menuItems} />
      <h1>Bienvenido</h1>
    </div>
  );
}

export default SideBarHome;