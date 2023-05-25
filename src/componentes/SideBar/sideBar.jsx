import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Órdenes</li>
        <li>Estadísticas</li>
        <li>Configuración</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
