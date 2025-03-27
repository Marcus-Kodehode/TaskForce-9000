import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import confetti from 'canvas-confetti';
import CookieWithSteam from './components/Cookie/CookieWithSteam';
import './styles/background.css';


const STORAGE_KEY = 'todo-tasks-v1';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 🔃 Last inn oppgaver fra localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const parsedWithTimestamps = parsed.map((task) => ({
          ...task,
          createdAt: Number(task.createdAt),
        }));
        setTasks(parsedWithTimestamps);
      } catch (error) {
        console.error('❌ Kunne ikke parse localStorage-data:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // 💾 Lagre til localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  // ➕ Legg til ny oppgave
  const handleAddTask = (newTask) => {
    const taskWithTimestamp = {
      ...newTask,
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, taskWithTimestamp]);
  };

  // 🔀 Flytt oppgave til ny status
  const handleMoveTask = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // ✅ Rydd fullførte
  const handleClearCompleted = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
    const remaining = tasks.filter((task) => task.status !== 'completed');
    setTasks(remaining);
  };

  // ❌ Tøm alt
  const handleClearAll = () => {
    if (confirm('Er du sikker på at du vil slette alle oppgaver?')) {
      setTasks([]);
    }
  };

  return (
    <div>
      {/* 🔥 Animert sci-fi bakgrunn */}
      <div className="background-anim">
  {[...Array(60)].map((_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ))}
</div>

      {/* 🍪 Cookie med interaksjon */}
      <CookieWithSteam />

      {/* 🧾 Oppgaveform */}
      <TaskForm onAddTask={handleAddTask} />

      {/* 📋 Oppgaveliste */}
      <TaskList tasks={tasks} onMoveTask={handleMoveTask} />

      {/* 🧹 Kontrollknapper */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <button
          onClick={handleClearCompleted}
          style={{
            backgroundColor: '#ffcc00',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Rydd fullførte oppgaver
        </button>

        <button
          onClick={handleClearAll}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Tøm alle oppgaver
        </button>
      </div>
    </div>
  );
}

export default App;
