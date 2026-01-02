import axiosInstance from './axiosInstance';

// Service layer - All API calls related to todos

/**
 * Fetch all todos from the API
 * @returns {Promise} Array of todo objects
 */
export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

/**
 * Fetch a specific todo by ID
 * @param {number} id - Todo ID
 * @returns {Promise} Single todo object
 */
export const getTodoById = async (id) => {
  try {
    const response = await axiosInstance.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo ${id}:`, error);
    throw error;
  }
};

// Note: We do NOT implement create, update, or delete operations
// as per the assignment requirements
