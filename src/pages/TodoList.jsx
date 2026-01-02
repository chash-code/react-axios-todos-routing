import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos } from '../api/todoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch todos when component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todos. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Navigate to todo details page
  const handleTodoClick = (id) => {
    navigate(`/todo/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading todos...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container">
        <div className="error-box">
          <h2>❌ Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>All Todos</h1>
        <p className="subtitle">Click on any todo to view details</p>
      </div>

      <div className="stats-box">
        <div className="stat">
          <span className="stat-label">Total Todos:</span>
          <span className="stat-value">{todos.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completed:</span>
          <span className="stat-value completed">
            {todos.filter(todo => todo.completed).length}
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">Pending:</span>
          <span className="stat-value pending">
            {todos.filter(todo => !todo.completed).length}
          </span>
        </div>
      </div>

      <div className="todo-grid">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="todo-card"
            onClick={() => handleTodoClick(todo.id)}
          >
            <div className="todo-header">
              <span className="todo-id">#{todo.id}</span>
              <span className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}>
                {todo.completed ? '✓ Completed' : '⏳ Pending'}
              </span>
            </div>
            <h3 className="todo-title">{todo.title}</h3>
            <p className="todo-hint">Click to view details →</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
