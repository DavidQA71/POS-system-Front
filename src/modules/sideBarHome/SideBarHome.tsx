import SideBar from '../../components/SideBar/SideBar';
import './SideBarHome.css';
import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';

const SideBarHome = () => {
  const { isAdmin, nameUser } = useContext(HomeContext);
  console.log(nameUser)
  const menuItems = [
    { path: '/caja', label: 'Caja' },
    { path: '/stock', label: 'Stock' },
    ...(isAdmin ? [{path: '/admUsuarios', label: 'Admin Usuarios'}] : [])
  ]

  return(
    <div className='homeContainer'>
      <main className='mainHomeContainer'>
        <h1 id='welcomeHome'>{`Bienvenido, ${nameUser}`}</h1>
      </main>
      <aside className='sidebarHomeContainer'>
        <SideBar items={menuItems} />
      </aside>
    </div>
  );
}

export default SideBarHome;