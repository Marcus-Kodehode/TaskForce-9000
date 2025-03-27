// src/components/Reward/RewardModal.jsx
import styles from './RewardModal.module.css';

function RewardModal({ message, quote, onClose, completedCount }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2 className={styles.title}>{message}</h2>
        <p className={styles.quote}>“{quote}”</p>
        <h3 className={styles.counter}>
          Finished Tasks: {completedCount} / 20
        </h3>
      </div>
    </div>
  );
}

export default RewardModal;
