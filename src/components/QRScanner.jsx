import React from 'react';

const QRScanner = () => {
  const handleScan = () => {
    // In a real app, this would trigger the camera to scan a QR code
    alert('QR code scanning is not yet implemented.');
  };

  return (
    <div className="qr-scanner-container">
      <h2>Scan QR Code for Attendance</h2>
      <p>Point your camera at the QR code displayed by your teacher to mark your attendance.</p>
      <button className="btn" onClick={handleScan}>
        <i className="fas fa-camera"></i> Start Scanning
      </button>
      <div className="scanner-preview" style={{ marginTop: '20px', border: '1px solid #ccc', minHeight: '200px' }}>
        {/* Camera preview will be displayed here */}
      </div>
    </div>
  );
};

export default QRScanner;
