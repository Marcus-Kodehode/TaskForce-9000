import TaskColumn from '../TaskColumn/TaskColumn';
import { DragDropContext } from '@hello-pangea/dnd';

function TaskList({ tasks, onMoveTask }) {
  const statuses = ['not-started', 'in-progress', 'completed'];

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // Unchanged position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Oppdater status
    onMoveTask(draggableId, destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {statuses.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskList;
