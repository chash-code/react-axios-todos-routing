# Fetch & Display Todos Using Axios and React Routing

A React application that fetches Todos data using Axios from a public API and displays it using React Router for navigation.

## Project Structure
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── axiosInstance.js
│   │   └── todoService.js
│   ├── pages/
│   │   ├── TodoList.jsx
│   │   └── TodoDetails.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
## Features

- ✅ Fetch todos from public API using Axios
- ✅ Display all todos in a list
- ✅ Route-based navigation (`/` and `/todo/:id`)
- ✅ View individual todo details
- ✅ Axios logic separated in dedicated folder
- ✅ Clean component structure

## Requirements

### 1. API & Data Fetching
- Use Axios to fetch data from public Todos API
- Axios logic must NOT be written inside React components
- Only GET requests allowed

### 2. Folder & File Structure
Axios-related logic placed in separate folder:
src/
api/
axiosInstance.js
todoService.js
pages/
TodoList.jsx
TodoDetails.jsx
### 3. Axios Service Functions
- `getTodos()` - fetch all todos
- `getTodoById(id)` - fetch specific todo by ID
- ❌ Do NOT implement create, update, or delete APIs

### 4. Routing (Mandatory)
- `/` - Displays list of all todos
- `/todo/:id` - Displays details of particular todo

### 5. Component Usage Rules
- UI components should only call `getTodos()` and `getTodoById(id)`
- ❌ No direct Axios usage inside components
- ❌ No update or delete operations

### 6. UI Expectations
- **Todo List Page**: Show title and completion status, navigate to detail page
- **Todo Details Page**: Show detailed information (id, title, status)

## How to Run

```bash
npm install
npm start
