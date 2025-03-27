import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import confetti from 'canvas-confetti';
import CookieWithSteam from './components/Cookie/CookieWithSteam';
import RewardModal from './components/Reward/RewardModal';
import './styles/background.css';

const STORAGE_KEY = 'todo-tasks-v1';
const REWARD_KEY = 'reward-count-v1';

const REWARD_STAGES = [5, 10, 15, 20];
const QUOTES = [
  "Small steps every day lead to big results.",
  "Progress, not perfection.",
  "You're doing better than you think.",
  "Keep going – you're unstoppable!",
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [rewardStage, setRewardStage] = useState(0);

  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    const storedRewards = localStorage.getItem(REWARD_KEY);

    if (storedTasks) {
      try {
        const parsed = JSON.parse(storedTasks).map((task) => ({
          ...task,
          createdAt: Number(task.createdAt),
        }));
        setTasks(parsed);
      } catch (error) {
        console.error('Error parsing tasks:', error);
      }
    }

    if (storedRewards) {
      setCompletedCount(Number(storedRewards));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      localStorage.setItem(REWARD_KEY, completedCount.toString());
    }
  }, [tasks, completedCount, isLoaded]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, createdAt: Date.now() }]);
  };

  const handleMoveTask = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleClearCompleted = () => {
    const completed = tasks.filter((task) => task.status === 'completed').length;
    if (completed === 0) {
      alert('No completed tasks yet! 💡');
      return;
    }

    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

    const newCount = completedCount + completed;
    const resetCount = newCount >= 20 ? 0 : newCount;

    if (REWARD_STAGES.includes(newCount)) {
      setRewardStage(newCount / 5);
      setShowReward(true);
    }

    setCompletedCount(resetCount);
    setTasks((prev) => prev.filter((task) => task.status !== 'completed'));
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      setTasks([]);
    }
  };

  const closeReward = () => setShowReward(false);

  return (
    <div>
      <div className="background-anim">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <CookieWithSteam />
      <TaskForm onAddTask={handleAddTask} />

      {/* 🧮 Progress display */}
      <h3 style={{
        textAlign: 'center',
        color: '#00ffaa',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontWeight: 'normal',
        fontSize: '1.1rem',
      }}>
        Completed tasks: {completedCount} / 20
      </h3>

      <TaskList tasks={tasks} onMoveTask={handleMoveTask} />

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
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
          Clear completed tasks
        </button>

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
          Delete all tasks
        </button>
      </div>

      {showReward && (
        <RewardModal
          message={`Congratulations on ${REWARD_STAGES[rewardStage - 1]} tasks!`}
          quote={QUOTES[rewardStage - 1]}
          completedCount={completedCount}
          onClose={closeReward}
        />
      )}
    </div>
  );
}

export default App;
