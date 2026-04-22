import styles from './PointsDashboard.module.css';

function PointsDashboard({ points, monthlyPoints, pointsToNextReward }) {
  const progressPercentage = ((points % 500) / 500) * 100;
  
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Your Points</h2>
      
      <div className={styles.pointsDisplay}>
        <span className={styles.pointsNumber}>{points.toLocaleString()}</span>
        <span className={styles.pointsLabel}>pts</span>
      </div>
      
      <p className={styles.monthlyPoints}>
        +{monthlyPoints} pts this month
      </p>
      
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className={styles.progressText}>
          {pointsToNextReward} pts to $5 off reward
        </p>
      </div>
    </div>
  );
}

export default PointsDashboard;
