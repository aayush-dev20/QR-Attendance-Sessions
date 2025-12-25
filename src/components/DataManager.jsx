import React from 'react';

// Mock data
const users = [
  { id: 'S12345', name: 'John Doe', role: 'Student' },
  { id: 'T67890', name: 'Jane Smith', role: 'Teacher' },
  { id: 'S54321', name: 'Peter Jones', role: 'Student' },
];

const DataManager = () => {
  const handleAddStudent = () => {
    alert('Adding new students is not yet implemented.');
  };

  const handleAddTeacher = () => {
    alert('Adding new teachers is not yet implemented.');
  };

  return (
    <div className="data-manager-container">
      <h2>Data Management</h2>
      <div className="data-actions">
        <button className="btn" onClick={handleAddStudent}>Add Student</button>
        <button className="btn" onClick={handleAddTeacher}>Add Teacher</button>
      </div>

      <div className="user-list">
        <h3>Existing Users</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-sm btn-secondary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManager;
