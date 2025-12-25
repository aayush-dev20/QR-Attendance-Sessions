import React from 'react';

const Sidebar = ({ onNavClick }) => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#" onClick={() => onNavClick('student-dashboard')}>Student Dashboard</a></li>
          <li><a href="#" onClick={() => onNavClick('qr-scanner')}>QR Scanner</a></li>
          <li><a href="#" onClick={() => onNavClick('data-manager')}>Data Manager</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
