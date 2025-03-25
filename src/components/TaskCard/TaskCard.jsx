// 🎨 Importerer stilene fra TaskCard.module.css
import styles from './TaskCard.module.css';

// 🧲 Importerer Draggable fra dnd-biblioteket for å gjøre kortet flyttbart
import { Draggable } from '@hello-pangea/dnd';

// 🎴 Enkelt kort som representerer én oppgave
function TaskCard({ task, index }) {
  return (
    // 🧲 Gjør komponenten "draggable" (flyttbar)
    // - draggableId må være en string, derfor .toString()
    // - index brukes av dnd-systemet for rekkefølgehåndtering
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        // 📦 Hovedkortet (div) får refs og props fra dnd for å fungere riktig
        <div
          className={`${styles.card} ${styles[`status-${task.status}`]}`} // 🎨 Dynamisk klasse basert på status (f.eks. status-in-progress)
          ref={provided.innerRef} // 🔗 Forbinder elementet til dnd-systemet
          {...provided.draggableProps} // 🧲 Gjør hele elementet flyttbart
          {...provided.dragHandleProps} // 🎯 Angir "håndtaket" man bruker for å dra (her hele kortet)
        >
          {/* 📝 Tittel på oppgaven */}
          <h3 className={styles.title}>{task.title}</h3>

          {/* 📄 Beskrivelse */}
          <p className={styles.desc}>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
