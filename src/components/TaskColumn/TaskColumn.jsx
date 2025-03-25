import TaskCard from '../TaskCard/TaskCard';
import { Droppable } from '@hello-pangea/dnd';

function TaskColumn({ status, tasks }) {
  const statusLabels = {
    'not-started': 'Ikke påbegynt',
    'in-progress': 'I gang',
    completed: 'Fullført',
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
