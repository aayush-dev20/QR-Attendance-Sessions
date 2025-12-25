import React, { useState } from 'react';

const AuthPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [selectedRole, setSelectedRole] = useState('student');

  // State for login form
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for register form
  const [registerId, setRegisterId] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would have authentication logic here
    console.log('Login attempt with:', { loginId, loginPassword, role: selectedRole });
    onLogin();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, you would have registration logic here
    console.log('Register attempt with:', { registerId, registerName, registerEmail, registerPassword, role: selectedRole });
    onLogin();
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Login to EduTrack Pro</h3>
        </div>
        <div className="modal-body">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          <div className="role-selector">
            <div 
              className={`role-option ${selectedRole === 'student' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('student')}
            >
              <i className="fas fa-user-graduate"></i>
              <span>Student</span>
            </div>
            <div 
              className={`role-option ${selectedRole === 'teacher' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('teacher')}
            >
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Teacher</span>
            </div>
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label" htmlFor="loginId">Student/Teacher ID</label>
                <input 
                  className="form-control" 
                  type="text" 
                  id="loginId" 
                  required 
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input 
                  className="form-control" 
                  type="password" 
                  id="loginPassword" 
                  required 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label" htmlFor="registerId">Student/Teacher ID</label>
                <input 
                  className="form-control" 
                  type="text" 
                  id="registerId" 
                  required 
                  value={registerId}
                  onChange={(e) => setRegisterId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="registerName">Full Name</label>
                <input 
                  className="form-control" 
                  type="text" 
                  id="registerName" 
                  required
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="registerEmail">Email Address</label>
                <input 
                  className="form-control" 
                  type="email" 
                  id="registerEmail" 
                  required
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input 
                  className="form-control" 
                  type="password" 
                  id="registerPassword" 
                  required 
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="registerConfirmPassword">Confirm Password</label>
                <input 
                  className="form-control" 
                  type="password" 
                  id="registerConfirmPassword" 
                  required 
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn" style={{ width: '100%' }}>Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
