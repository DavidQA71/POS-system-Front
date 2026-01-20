//revisar comentario de github de Jony 

interface MenuItem {
  path: string;
  label: string;
}

function getMenuItems(isAdmin: boolean): MenuItem[] {
  const items: MenuItem[] = [
    { path: '/caja', label: 'Caja' },
    { path: '/stock', label: 'Stock' },
  ];

  if (isAdmin) {
    items.push({ path: '/admUsuarios', label: 'Admin Usuarios' });
  }

  return items;
}

export default getMenuItems;