import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';
import './HomePage.css';
import SideBar from '../../components/SideBar/SideBar';
import getMenuItems from '../../helpers/helper';

import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const { userInfo } = useContext(HomeContext);
  const { handleLogout } = useContext(AuthContext);
  const menuItems = getMenuItems(userInfo.isAdmin);

  return(
    <>
      <div className='homeContainer'>
        <header className="navHome">
          <h1 className='homeTitle'>Sistema de ventas factory</h1>
        </header>
        <main className='mainHomeContainer'>
          <h2 id='welcomeHome' className="welcomeContainer">
            <PersonIcon sx={{fontSize: '100px'}} />
            <span>Bienvenido, {userInfo.userName}</span>
          </h2>
        </main>
        <aside className='sidebarHomeContainer'>
          <SideBar items={menuItems} onLogout={handleLogout}/>
        </aside>
      </div>
    </>
  );
}

export default HomePage;