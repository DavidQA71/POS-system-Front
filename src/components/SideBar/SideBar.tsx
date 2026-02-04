import type { ReactNode } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

interface ISideBarItem {
  path: string;
  label: string;
  icon: ReactNode;
}

interface ISideBarProps {
  items: ISideBarItem[];
  onLogout: () => void;
}

const SideBar = ({ items, onLogout }: ISideBarProps) => {

  return(
      <nav className='nav-sidebar'>
        <ul className='sidebar-list'>
          {items.map((items,index) => (
            <li key={index} className='sidebar-item'>
                <Link to={items.path} className='sidebar-link'>
                  <span className="sidebar-icon">
                    {items.icon}
                  </span>
                  <span>{items.label}</span>
                </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-logout">
          <button
            type="button"
            className="sidebar-link sidebar-button"
            onClick={onLogout}
          >
            <span className="sidebar-icon">
            <LogoutIcon />
          </span>
          <span>Cerrar sesión</span>
          </button>
        </div>
      </nav>
  )
};

export default SideBar;