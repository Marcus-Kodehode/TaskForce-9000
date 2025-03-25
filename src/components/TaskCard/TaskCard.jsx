import styles from './TaskCard.module.css';
import { Draggable } from '@hello-pangea/dnd';

function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className={`${styles.card} ${styles[`status-${task.status}`]}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.desc}>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
