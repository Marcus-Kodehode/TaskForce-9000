// 📦 Importerer TaskCard-komponenten som viser hver enkelt oppgave
import TaskCard from '../TaskCard/TaskCard';

// 🧲 Importerer Droppable fra dnd-biblioteket for å tillate drag-and-drop på kolonnen
import { Droppable } from '@hello-pangea/dnd';

// 🧱 Komponent for én kolonne (status): Not started, In progress eller Completed
function TaskColumn({ status, tasks }) {
  // 🏷️ Mapper status til engelske overskrifter for visning
  const statusLabels = {
    'not-started': 'Not started',
    'in-progress': 'In progress',
    completed: 'Completed',
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#1c1c1c',
        borderRadius: '12px',
        padding: '1rem',
        minHeight: '300px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{statusLabels[status]}</h2>

      <Droppable droppableId={status}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskColumn;
