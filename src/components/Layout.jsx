import { NavLink } from 'react-router-dom';
import { Home, Tag, MapPin, Receipt, User, Leaf } from 'lucide-react';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div className={styles.logo}>
          <Leaf className={styles.leafIcon} size={24} />
          <span>Green Leaf Market</span>
        </div>
        <button className={styles.profileButton} aria-label="Profile">
          <User size={24} color="var(--forest-green)" />
        </button>
      </header>

      {/* Main Content */}
      <main className={styles.content}>
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
          end
        >
          <Home className={styles.navIcon} />
          <span className={styles.navLabel}>Home</span>
        </NavLink>

        <NavLink 
          to="/offers" 
          className={({ isActive }) => 
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          <Tag className={styles.navIcon} />
          <span className={styles.navLabel}>Offers</span>
        </NavLink>

        <NavLink 
          to="/stores" 
          className={({ isActive }) => 
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          <MapPin className={styles.navIcon} />
          <span className={styles.navLabel}>Stores</span>
        </NavLink>

        <NavLink 
          to="/history" 
          className={({ isActive }) => 
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          <Receipt className={styles.navIcon} />
          <span className={styles.navLabel}>History</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Layout;
