import { Leaf, Globe } from 'lucide-react';
import styles from './ImpactWidget.module.css';

function ImpactWidget({ plasticSaved, carbonOffset }) {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Your Impact This Month</h3>
      
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <Leaf size={18} className={styles.icon} />
          <span className={styles.value}>{plasticSaved} lbs</span>
          <span className={styles.label}>plastic saved</span>
        </div>
        
        <div className={styles.metric}>
          <Globe size={18} className={styles.icon} />
          <span className={styles.value}>{carbonOffset} lbs</span>
          <span className={styles.label}>CO2 offset</span>
        </div>
      </div>
    </div>
  );
}

export default ImpactWidget;
