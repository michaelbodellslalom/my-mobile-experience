import { offers } from '../data/mockData';
import OfferCard from '../components/OfferCard';
import styles from './Offers.module.css';

function Offers() {
  return (
    <div className={styles.offers}>
      <div className="container">
        <h1 className={styles.pageTitle}>Your Offers</h1>
        <p className={styles.subtitle}>
          {offers.length} personalized offers available
        </p>
        
        <div className={styles.offersGrid}>
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
