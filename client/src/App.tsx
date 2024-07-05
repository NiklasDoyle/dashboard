import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Bedtime from './pages/Bedtime/Bedtime';
import Wakeup from './pages/Wakeup/Wakeup';
import '@mantine/core/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bed" element={<Bedtime />} />
        <Route path="/wake" element={<Wakeup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
