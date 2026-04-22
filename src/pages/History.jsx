import { purchaseHistory, userProfile } from '../data/mockData';
import HistoryItem from '../components/HistoryItem';
import styles from './History.module.css';

function History() {
  return (
    <div className={styles.history}>
      <div className="container">
        <h1 className={styles.pageTitle}>Purchase History</h1>
        
        {/* Lifetime Impact Summary */}
        <div className={styles.impactSummary}>
          <h3>Your Lifetime Impact</h3>
          <div className={styles.impactStats}>
            <div className={styles.impactStat}>
              <span className={styles.impactIcon}>🌿</span>
              <span className={styles.impactValue}>
                {userProfile.lifetimeImpact.plasticSaved} lbs
              </span>
              <span className={styles.impactLabel}>Plastic Saved</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactIcon}>🌍</span>
              <span className={styles.impactValue}>
                {userProfile.lifetimeImpact.carbonOffset} lbs
              </span>
              <span className={styles.impactLabel}>CO2 Offset</span>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className={styles.transactionsList}>
          {purchaseHistory.map((transaction) => (
            <HistoryItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
