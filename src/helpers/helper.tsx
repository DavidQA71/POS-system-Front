import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import type { ReactNode } from "react";

interface MenuItem {
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

export default getMenuItems;