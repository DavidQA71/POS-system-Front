import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';
import './HomePage.css';
import SideBar from '../../components/SideBar/SideBar';
import getMenuItems from '../../helpers/helper';

const HomePage = () => {
  const { isAdmin, nameUser } = useContext(HomeContext);
  const menuItems = getMenuItems(isAdmin);

  return(
    <>
      <div className='homeContainer'>
        <main className='mainHomeContainer'>
          <h1 id='welcomeHome'>
            {nameUser 
              ? `Bienvenido, ${nameUser}`
              : `No se encontró el usuario`}
          </h1>
        </main>
        <aside className='sidebarHomeContainer'>
          <SideBar items={menuItems} />
        </aside>
      </div>
    </>
  );
}

export default HomePage;