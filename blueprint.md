
# EduTrack Pro - QR Attendance & Academic Management System

## Overview

EduTrack Pro is a modern, all-in-one academic management system designed to streamline attendance tracking, marks management, and communication between students and teachers. The application is built as a Single Page Application (SPA) using React and Vite, featuring a user-friendly interface with QR code-based attendance, real-time data updates, and voice command integration.

## Implemented Features

*   **Role-Based Access Control:** Separate interfaces and functionalities for Students and Teachers.
*   **Secure Authentication:** A robust login and registration system.
*   **Student Dashboard:**
    *   View personal details and academic progress.
    *   Track attendance records for each subject.
    *   View marks and grades.
*   **Teacher Dashboard:**
    *   Manage student records and class schedules.
    *   Generate and display QR codes for marking attendance.
    *   Input and update student marks.
*   **Real-time QR Attendance:** Students can scan a QR code to mark their presence, with instant feedback.
*   **Voice Commands:** Hands-free navigation and actions using voice recognition.
*   **Responsive Design:** A fully responsive and mobile-first user interface.
*   **Dark/Light Theme:** A theme toggle for user comfort.

## Current Refactoring Plan: Vite Project Restructuring

The project is being restructured to align with modern Vite and React development standards. The previous structure mixed vanilla JavaScript DOM manipulation with React, leading to an unmaintainable setup.

**Actionable Steps:**

1.  **Standardize Project Structure:**
    *   Move all source code (`.jsx`, `.js`, `.css`) into the `/src` directory.
    *   Remove redundant and misplaced files from the root directory.
2.  **Clean `index.html`:**
    *   Simplify `index.html` to serve as the main entry point for the Vite application, containing only the root div (`<div id="root"></div>`) where the React app will be mounted.
3.  **Create a Root Component (`src/App.jsx`):**
    *   Convert the static HTML from the old `index.html` into a main `App` component.
    *   All UI and application logic will be managed within this component and its children.
4.  **Component-Based Architecture:**
    *   Break down the application's UI and logic into reusable React components:
        *   `Auth.jsx`: Manages user login and registration.
        *   `Dashboard.jsx`: The main view after a user logs in.
        *   `QRScanner.jsx`: Handles the QR code scanning functionality.
5.  **State Management:**
    *   Utilize React hooks (`useState`, `useEffect`) to manage application state declaratively, replacing the previous imperative DOM manipulation.
6.  **Dependency Management:**
    *   Install all external libraries (like Font Awesome) via `npm` to be bundled with the application, instead of relying on CDNs.
7.  **Entry Point Configuration:**
    *   Ensure `src/main.jsx` correctly imports the main `App` component and renders it to the DOM.
