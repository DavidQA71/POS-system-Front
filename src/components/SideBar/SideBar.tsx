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
    <aside>
      <nav>
        <ul>
          {items.map((items,index) => (
            <li key={index}>
                <Link to={items.path}>{items.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
};

export default SideBar;