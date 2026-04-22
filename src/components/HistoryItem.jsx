import { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import styles from './HistoryItem.module.css';

function HistoryItem({ transaction }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className={styles.item}>
      <button 
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className={styles.headerContent}>
          <div className={styles.date}>{formatDate(transaction.date)}</div>
          <div className={styles.store}>{transaction.storeName}</div>
          
          <div className={styles.summary}>
            <span className={styles.amount}>${transaction.total.toFixed(2)}</span>
            <span className={styles.points}>• +{transaction.pointsEarned} pts</span>
          </div>
          
          <div className={styles.impact}>
            <Leaf size={14} className={styles.leafIcon} />
            <span>{transaction.sustainability.plasticSaved} lbs plastic saved</span>
          </div>
        </div>
        
        <div className={styles.iconContainer}>
          {isExpanded ? (
            <ChevronUp size={20} className={styles.chevron} />
          ) : (
            <ChevronDown size={20} className={styles.chevron} />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className={styles.expandedContent}>
          <h4 className={styles.itemsTitle}>Items Purchased</h4>
          <ul className={styles.itemsList}>
            {transaction.items.map((item, index) => (
              <li key={index} className={styles.itemRow}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          
          <div className={styles.impactDetails}>
            <h4 className={styles.impactTitle}>Environmental Impact</h4>
            <div className={styles.impactStats}>
              <div>🌿 {transaction.sustainability.plasticSaved} lbs plastic saved</div>
              <div>🌍 {transaction.sustainability.carbonOffset} lbs CO2 offset</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryItem;
