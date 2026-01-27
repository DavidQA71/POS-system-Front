import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import type { ReactNode } from "react";

interface MenuItem {
  path?: string;
  label: string;
  icon: ReactNode;
  action?: () => void;
}

function getMenuItems(isAdmin: boolean, handleLogout: ()=>void): MenuItem[] {
  const items: MenuItem[] = [
    { path: '/caja', label: 'Caja', icon: <PointOfSaleIcon /> },
    { path: '/stock', label: 'Stock', icon: <InventoryIcon /> },
  ];

  if (isAdmin) {
    items.push({ path: '/admUsuarios', label: 'Admin Usuarios', icon: <ManageAccountsIcon /> });
  }

  items.push({label: 'Cerrar sesión', icon: <LogoutIcon />, action: handleLogout })
  return items;
}

export default getMenuItems;