// 📦 Importerer TaskCard-komponenten som viser hver enkelt oppgave
import TaskCard from '../TaskCard/TaskCard';

// 🧲 Importerer Droppable fra dnd-biblioteket for å tillate drag-and-drop på kolonnen
import { Droppable } from '@hello-pangea/dnd';

// 🧱 Komponent for én kolonne (status): Ikke påbegynt, I gang eller Fullført
function TaskColumn({ status, tasks }) {
  // 🏷️ Et "ordbok-objekt" for å vise brukervennlige navn i stedet for ID/keys
  const statusLabels = {
    'not-started': 'Ikke påbegynt',
    'in-progress': 'I gang',
    completed: 'Fullført',
  };

  return (
    // 📦 Hovedwrapper for kolonnen – styling inline her (kunne vært CSS-modul også)
    <div
      style={{
        flex: 1,                         // 📏 Tar like mye plass som de andre kolonnene
        backgroundColor: '#1c1c1c',      // 🎨 Mørk bakgrunn (samme som i CSS-modulen)
        borderRadius: '12px',            // 🟦 Runde hjørner
        padding: '1rem',                 // Luft inni kolonnen
        minHeight: '300px',              // Sørger for at tomme kolonner fortsatt har høyde
      }}
    >
      {/* 🏷️ Overskrift for kolonnen – viser statusnavn */}
      <h2 style={{ textAlign: 'center' }}>{statusLabels[status]}</h2>

      {/* 🧲 Gjør kolonnen droppable (tillater at oppgaver slippes her) */}
      <Droppable droppableId={status}>
        {(provided) => (
          // 🔁 Wrapper som refererer til droppable-området og får props fra dnd
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/* 🧱 Gjengir alle oppgaver i denne kolonnen */}
            {tasks.map((task, index) => (
              // 🎴 Hver oppgave rendres som et draggable kort
              <TaskCard key={task.id} task={task} index={index} />
            ))}

            {/* 🧩 Sørger for at plasseringen justeres korrekt ved drag-and-drop */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskColumn;
