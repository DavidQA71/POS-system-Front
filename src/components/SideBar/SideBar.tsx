import './SideBar.css';
import { Link } from 'react-router-dom';

interface ISideBarItem {
  path: string;
  label: string;
}

interface ISideBarProps {
  items: ISideBarItem[];
}

const SideBar = ({ items }: ISideBarProps) => {

  return(
      <nav className='nav-sidebar'>
        <ul className='sidebar-list'>
          {items.map((items,index) => (
            <li key={index} className='sidebar-item'>
                <Link to={items.path} className='sidebar-link'>{items.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
  )
};

export default SideBar;