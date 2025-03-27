import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not-started');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };

    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('not-started');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>TaskForce 9000</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="not-started">Not started</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default TaskForm;
