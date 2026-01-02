import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodoById } from '../api/todoService';

const TodoDetails = () => {
  const { id } = useParams(); // Get todo ID from URL
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch specific todo by ID
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await getTodoById(id);
        setTodo(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todo details. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading todo details...</p>
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
          <button onClick={() => navigate('/')} className="btn-back">
            ← Back to List
          </button>
        </div>
      </div>
    );
  }

  // If no todo found
  if (!todo) {
    return (
      <div className="container">
        <div className="error-box">
          <h2>❌ Todo Not Found</h2>
          <p>The todo you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="btn-back">
            ← Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Back to List
      </button>

      <div className="details-card">
        <div className="details-header">
          <h1>Todo Details</h1>
          <span className={`status-badge-large ${todo.completed ? 'completed' : 'pending'}`}>
            {todo.completed ? '✓ Completed' : '⏳ Pending'}
          </span>
        </div>

        <div className="details-content">
          <div className="detail-row">
            <span className="detail-label">Todo ID:</span>
            <span className="detail-value">#{todo.id}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">User ID:</span>
            <span className="detail-value">{todo.userId}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Title:</span>
            <span className="detail-value">{todo.title}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value">
              {todo.completed ? (
                <span className="status-text completed">
                  ✓ This todo has been completed
                </span>
              ) : (
                <span className="status-text pending">
                  ⏳ This todo is still pending
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="details-footer">
          <p className="info-text">
            This todo belongs to user #{todo.userId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
