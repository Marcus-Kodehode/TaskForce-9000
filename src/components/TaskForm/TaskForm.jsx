// 🧠 Importerer useState-hook for å håndtere intern tilstand i skjemaet
import { useState } from 'react';

// 🎨 Importerer CSS-modulen for stilsetting av skjemaet
import styles from './TaskForm.module.css';

// 📝 Komponent som lar brukeren legge til en ny oppgave
function TaskForm({ onAddTask }) {
  // 📋 Tre lokale states: tittel, beskrivelse og status
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not-started'); // Default status

  // 📤 Håndterer innsending av skjema
  const handleSubmit = (e) => {
    e.preventDefault(); // 🚫 Stopper siden fra å reloade

    // ⚠️ Unngå at tomme titler blir lagt til
    if (!title.trim()) return;

    // 🆕 Lager et nytt oppgaveobjekt
    const newTask = {
      id: Date.now(),        // Unik ID basert på timestamp
      title,
      description,
      status,
    };

    // 📦 Sender oppgaven til parent-komponenten via callback
    onAddTask(newTask);

    // ♻️ Nullstiller skjemaet
    setTitle('');
    setDescription('');
    setStatus('not-started');
  };

  return (
    // 📩 Skjema som kaller handleSubmit når det sendes inn
    <form onSubmit={handleSubmit} className={styles.form}>
      
      {/* ✨ Glødende tittel med neon-look */}
      <h1 className={styles.title}>TaskForce 9000</h1>

      {/* 📝 Input for tittel */}
      <input
        type="text"
        placeholder="Tittel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* 🧾 Tekstområde for beskrivelse */}
      <textarea
        placeholder="Beskrivelse"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* 🔀 Dropdown for statusvalg */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="not-started">Ikke påbegynt</option>
        <option value="in-progress">I gang</option>
        <option value="completed">Fullført</option>
      </select>

      {/* ✅ Send-knapp */}
      <button type="submit">Legg til oppgave</button>
    </form>
  );
}

export default TaskForm;
