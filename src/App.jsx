import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Stores from './pages/Stores';
import History from './pages/History';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Layout>
  );
}

export default App;
