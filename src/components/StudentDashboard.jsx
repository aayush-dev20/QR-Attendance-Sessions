import React from 'react';

// Mock data - in a real app, this would come from an API
const studentData = {
  name: 'John Doe',
  id: 'S12345',
  attendance: [
    { subject: 'Mathematics', attended: 28, total: 30 },
    { subject: 'Physics', attended: 25, total: 30 },
    { subject: 'Chemistry', attended: 29, total: 30 },
    { subject: 'English', attended: 27, total: 30 },
  ],
  marks: [
    { subject: 'Mathematics', score: 85 },
    { subject: 'Physics', score: 78 },
    { subject: 'Chemistry', score: 92 },
    { subject: 'English', score: 88 },
  ]
};

const StudentDashboard = () => {
  const overallAttendance = studentData.attendance.reduce((acc, subj) => acc + subj.attended, 0);
  const totalClasses = studentData.attendance.reduce((acc, subj) => acc + subj.total, 0);
  const attendancePercentage = ((overallAttendance / totalClasses) * 100).toFixed(2);

  return (
    <div className="student-dashboard">
      <h2>Welcome, {studentData.name}!</h2>
      <p>Student ID: {studentData.id}</p>

      <div className="dashboard-section">
        <h3>Attendance</h3>
        <p>Overall Attendance: {attendancePercentage}%</p>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Attended</th>
              <th>Total Classes</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {studentData.attendance.map(subj => (
              <tr key={subj.subject}>
                <td>{subj.subject}</td>
                <td>{subj.attended}</td>
                <td>{subj.total}</td>
                <td>{((subj.attended / subj.total) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h3>Marks</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {studentData.marks.map(mark => (
              <tr key={mark.subject}>
                <td>{mark.subject}</td>
                <td>{mark.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
