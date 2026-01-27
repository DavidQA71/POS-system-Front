import type { ReactNode } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

interface ISideBarItem {
  path?: string;
  label: string;
  icon: ReactNode;
  action?: () => void;
}

interface ISideBarProps {
  items: ISideBarItem[];
}

const SideBar = ({ items }: ISideBarProps) => {

  return(
      <nav className='nav-sidebar'>
        <ul className='sidebar-list'>
          {items
            .filter(item => item.path) // solo items que navegan
            .map((item, index) => (
              <li key={index} className="sidebar-item">
                <Link to={item.path!} className="sidebar-link">
                  <span className="sidebar-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
        </ul>
        <div className="sidebar-logout">
          {items
            .filter(item => item.action) // solo acciones
            .map((item, index) => (
              <button
                key={index}
                type="button"
                className="sidebar-link sidebar-button"
                onClick={item.action}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
        </div>
      </nav>
  )
};

export default SideBar;