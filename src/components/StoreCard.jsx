import { Phone, Navigation } from 'lucide-react';
import styles from './StoreCard.module.css';

function StoreCard({ store }) {
  const handleGetDirections = () => {
    const address = encodeURIComponent(
      `${store.address}, ${store.city}, ${store.state} ${store.zip}`
    );
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${store.phone}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.storeName}>{store.name}</h3>
        <div className={styles.distance}>{store.distance} mi</div>
      </div>

      <div className={styles.status}>
        <span className={store.isOpen ? styles.statusOpen : styles.statusClosed}>
          {store.isOpen ? '● Open now' : '● Closed'}
        </span>
      </div>

      <div className={styles.address}>
        <p>{store.address}</p>
        <p>{store.city}, {store.state} {store.zip}</p>
        <p className={styles.phone}>{store.phone}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.button} onClick={handleGetDirections}>
          <Navigation size={18} />
          Get Directions
        </button>
        <button className={styles.buttonSecondary} onClick={handleCall}>
          <Phone size={18} />
          Call
        </button>
      </div>
    </div>
  );
}

export default StoreCard;
