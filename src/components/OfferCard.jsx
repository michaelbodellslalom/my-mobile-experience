import styles from './OfferCard.module.css';

function OfferCard({ offer }) {
  const isExpiringSoon = () => {
    const now = new Date();
    const expiration = new Date(offer.expirationDate);
    const daysUntilExpiration = (expiration - now) / (1000 * 60 * 60 * 24);
    return daysUntilExpiration < 3 && daysUntilExpiration >= 0;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className={styles.card}>
      {isExpiringSoon() && (
        <span className={styles.expiringSoonBadge}>Expiring Soon</span>
      )}
      
      <div className={styles.imageContainer}>
        <img 
          src={offer.imageUrl} 
          alt={offer.title}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.discount}>{offer.discount}</div>
        <div className={styles.title}>{offer.title}</div>
        <div className={styles.expiration}>
          Expires {formatDate(offer.expirationDate)}
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
