import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              📝 Todos App
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            {/* Route 1: Todo List Page */}
            <Route path="/" element={<TodoList />} />
            
            {/* Route 2: Todo Details Page */}
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Built with React, Axios, and React Router</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
