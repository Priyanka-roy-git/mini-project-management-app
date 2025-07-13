import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import AppHeader from './AppHeader';

export default function PrivateRoute() {
  const userId = useAuthStore((s) => s.userId);
  return userId ? (
    <>
      <AppHeader />  
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}
