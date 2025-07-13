import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Board from './components/Board';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />

    
      <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/project/:id" element={<Board />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
