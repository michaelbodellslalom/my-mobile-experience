import { stores } from '../data/mockData';
import StoreCard from '../components/StoreCard';
import styles from './Stores.module.css';

function Stores() {
  return (
    <div className={styles.stores}>
      <div className="container">
        <h1 className={styles.pageTitle}>Store Locations</h1>
        <p className={styles.subtitle}>
          {stores.length} stores near you
        </p>
        
        <div className={styles.storesList}>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stores;
