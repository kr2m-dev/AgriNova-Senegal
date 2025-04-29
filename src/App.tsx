import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlantDiagnostic from './pages/PlantDiagnostic';
import AnimalDiagnostic from './pages/AnimalDiagnostic';
import WeatherAlerts from './pages/WeatherAlerts';
import Marketplace from './pages/Marketplace';
import Training from './pages/Training';
import SmartFarming from './pages/SmartFarming';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="diagnostic-plantes" element={<PlantDiagnostic />} />
        <Route path="diagnostic-animaux" element={<AnimalDiagnostic />} />
        <Route path="alertes-meteo" element={<WeatherAlerts />} />
        <Route path="marche" element={<Marketplace />} />
        <Route path="formation" element={<Training />} />
        <Route path="agriculture-intelligente" element={<SmartFarming />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;