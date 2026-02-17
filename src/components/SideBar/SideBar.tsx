import './SideBar.css';
import { Link } from 'react-router-dom';
import type { MenuItem } from '../../helpers/helper';


interface ISideBarProps {
  items: MenuItem[];

}

const SideBar = ({ items }: ISideBarProps) => {

  return(
      <nav className='nav-sidebar'>
        <ul className='sidebar-list'>
          {items.map((items,index) => (
            <li key={index} className={`sidebar-item ${items.label === 'Cerrar sesión' ? 'sidebar-logout' : '' }`}>

              {items.path ? (
                <Link to={items.path} className='sidebar-link'>
                  <span className="sidebar-icon">{items.icon}</span>
                  <span>{items.label}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  className="sidebar-link sidebar-button sidebar-logout"
                  onClick={items.action}
                  >
                  <span className="sidebar-icon">{items.icon}</span>
                  <span>{items.label}</span>
                </button>
              )}

          </li>
          ))}
        </ul>
      </nav>
  )
};

export default SideBar;