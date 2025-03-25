// 🔧 React hooks for tilstand og sideeffekter
import { useState, useEffect } from 'react';

// 🧩 Komponenter for inputskjema og oppgaveliste
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

// 🎉 Konfetti-bibliotek for visuell belønning
import confetti from 'canvas-confetti';

// 🔐 Nøkkel for å lagre i localStorage
const STORAGE_KEY = 'todo-tasks-v1';

function App() {
  // 🧠 tasks: inneholder alle oppgavene
  // isLoaded: brukes for å forhindre at localStorage skrives før første load
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 🔁 useEffect – kjøres én gang ved oppstart for å hente oppgaver fra localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // 🔄 Parser JSON-string til JS-objekt
        const parsed = JSON.parse(stored);

        // 🕒 Sørger for at createdAt fortsatt er et tall
        const parsedWithTimestamps = parsed.map((task) => ({
          ...task,
          createdAt: Number(task.createdAt),
        }));

        setTasks(parsedWithTimestamps); // 🔁 Oppdaterer state med lagrede oppgaver
        console.log('📥 Tasks fra lagring:', parsedWithTimestamps);
      } catch (error) {
        console.error('❌ Kunne ikke parse localStorage-data:', error);
      }
    }

    // ✅ Markerer at init-loading er ferdig
    setIsLoaded(true);
  }, []);

  // 💾 Lagre oppgaver til localStorage hver gang tasks endres – men ikke før init-load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      console.log('💾 Lagret tasks til localStorage:', tasks);
    }
  }, [tasks, isLoaded]);

  // ➕ Legg til ny oppgave
  const handleAddTask = (newTask) => {
    const taskWithTimestamp = {
      ...newTask,
      createdAt: Date.now(), // 🕒 Legger til timestamp
    };

    // 🔼 Oppdaterer state med ny oppgave
    setTasks((prev) => [...prev, taskWithTimestamp]);
  };

  // 🔁 Flytter en oppgave til ny status (brukes med drag and drop)
  const handleMoveTask = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id.toString() === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // ✅ Rydder alle oppgaver med status "completed"
  const handleClearCompleted = () => {
    // 🎉 Skyter konfetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    // 🔁 Filtrerer vekk fullførte oppgaver
    const remaining = tasks.filter((task) => task.status !== 'completed');
    setTasks(remaining);
  };

  // ❌ Fjerner alle oppgaver etter bekreftelse
  const handleClearAll = () => {
    if (confirm('Er du sikker på at du vil slette alle oppgaver?')) {
      setTasks([]); // 🚫 Tømmer listen
    }
  };

  return (
    <div>
      {/* 🧾 Inputskjema for ny oppgave */}
      <TaskForm onAddTask={handleAddTask} />

      {/* 📋 Oppgaveliste med drag-and-drop */}
      <TaskList tasks={tasks} onMoveTask={handleMoveTask} />

      {/* 🧹 Rydd / Tøm-knapper */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        {/* Rydd fullførte */}
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

        {/* Tøm alle */}
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
