import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="navigation">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Órdenes</li>
          <li>Configuración</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
