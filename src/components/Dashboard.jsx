import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StudentDashboard from './StudentDashboard';
import QRScanner from './QRScanner';
import DataManager from './DataManager';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('student-dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'student-dashboard':
        return <StudentDashboard />;
      case 'qr-scanner':
        return <QRScanner />;
      case 'data-manager':
        return <DataManager />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar onNavClick={setActiveSection} />
      <div className="main-dashboard-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
