import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import PetCrewLanding from './pages/PetCrewLanding';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<Portfolio />} />

        {/* PetCrew routes */}
        <Route path="/petcrew" element={<PetCrewLanding />} />
        <Route path="/petcrew/privacy" element={<PrivacyPolicy />} />
        <Route path="/petcrew/support" element={<Support />} />
        <Route path="/petcrew/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
