import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import type { JSX } from '@emotion/react/jsx-runtime';
import type { Role } from '../types/roles';


/* interface MenuItem {
  path: string;
  label: string;
  icon: ReactNode;
}

function getMenuItems(isAdmin: boolean): MenuItem[] {
  const items: MenuItem[] = [
    { path: '/caja', label: 'Caja', icon: <PointOfSaleIcon /> },
    { path: '/stock', label: 'Stock', icon: <InventoryIcon /> },
  ];

  if (isAdmin) {
    items.push({ path: '/admUsuarios', label: 'Admin Usuarios', icon: <ManageAccountsIcon /> });
  }

  return items;
}
 */


export interface MenuItem {
path?: string;
label: string;
icon: JSX.Element;
action?: () => void;
allowedRoles?: Role[];
}

const MENU_CONFIG: MenuItem[] = [
{
path: '/caja',
label: 'Caja',
icon: <PointOfSaleIcon />,
allowedRoles: ['Administrador', 'Cajero']
},
{
path: '/stock',
label: 'Stock',
icon: <InventoryIcon />,
allowedRoles: ['Administrador', 'Supervisor']
},
{
path: '/admUsuarios',
label: 'Admin Usuarios',
icon: <ManageAccountsIcon />,
allowedRoles: ['Administrador']
},
];

function getMenuItems(userRole: Role, handleLogout: () => void): MenuItem[] {
const filteredItems = MENU_CONFIG.filter(
(item) => !item.allowedRoles || item.allowedRoles.includes(userRole)
);

filteredItems.push({
label: 'Cerrar sesión',
icon: <LogoutIcon />,
action: handleLogout,
});

return filteredItems;
}

export default getMenuItems;