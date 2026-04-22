import { userProfile, calculateMonthlyImpact } from '../data/mockData';
import PointsDashboard from '../components/PointsDashboard';
import ImpactWidget from '../components/ImpactWidget';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/mockData';
import styles from './Home.module.css';

function Home() {
  const monthlyImpact = calculateMonthlyImpact();

  return (
    <div className={styles.home}>
      <div className="container">
        {/* Dashboard Grid - Points and Impact */}
        <div className={styles.dashboardGrid}>
          <PointsDashboard 
            points={userProfile.points}
            monthlyPoints={userProfile.monthlyPoints}
            pointsToNextReward={userProfile.pointsToNextReward}
          />
          <ImpactWidget 
            plasticSaved={monthlyImpact.plasticSaved}
            carbonOffset={monthlyImpact.carbonOffset}
          />
        </div>

        {/* Offers Section */}
        <section className={styles.offersSection}>
          <h2 className={styles.sectionTitle}>Personalized Offers</h2>
          <div className={styles.offersScroll}>
            {offers.slice(0, 6).map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
