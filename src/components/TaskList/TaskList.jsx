// 🧱 Importerer TaskColumn-komponenten for å vise hver kolonne
import TaskColumn from '../TaskColumn/TaskColumn';

// 🧲 Importerer drag-and-drop kontekst fra hello-pangea (react-dnd)
import { DragDropContext } from '@hello-pangea/dnd';

// 📦 TaskList håndterer visning og organisering av alle oppgaver etter status
function TaskList({ tasks, onMoveTask }) {
  // 🔖 De tre ulike statusene som oppgaver kan ha
  const statuses = ['not-started', 'in-progress', 'completed'];

  // 🔁 Kalles når en dra/slipp-operasjon avsluttes
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // 🚫 Hvis oppgaven ikke ble sluppet noe sted (f.eks. sluppet utenfor)
    if (!destination) return;

    // ↩️ Hvis posisjon og kolonne er uendret, gjør ingenting
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // ✅ Oppdater status (kolonne) på oppgaven via parent callback
    onMoveTask(draggableId, destination.droppableId);
  };

  return (
    // 🔁 Hele drag-and-drop-systemet må være pakket inn i DragDropContext
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* 📦 Rekkefølgevis gjengivelse av kolonner (1 per status) */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {statuses.map((status) => (
          <TaskColumn
            key={status} // 🔑 Nøkkel for React rendering
            status={status} // 🏷️ Statusnavn sendes videre
            tasks={tasks.filter((task) => task.status === status)} // 📤 Filtrerer oppgaver etter riktig status
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskList;

