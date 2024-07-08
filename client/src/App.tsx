import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RoutinePage from './pages/RoutinePage';
import '@mantine/core/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/routine/:name" element={<RoutinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
