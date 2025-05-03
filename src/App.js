import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div style={styles.container}>
      <h1>📝 To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              ...styles.task,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => handleToggleTask(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f4f4f4",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
};

export default App;
