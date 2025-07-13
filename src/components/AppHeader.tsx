import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function AppHeader() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const uid = Cookies.get('uid');
    setUser(uid ?? '');
  }, []);

  return (
    <div style={styles.header}>
      <div style={styles.greeting}>
        <span style={styles.userIcon}>👋</span>
        <span style={styles.userText}>Welcome,  <strong>{user}</strong></span>
      </div>
      <button
        onClick={handleLogout}
        style={styles.logoutBtn}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#dc2626')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#ef4444')}
      >
        🔒 Logout
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.25rem',
    background: 'linear-gradient(to right, #4f46e5, #9333ea)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    color: '#fff',
    borderRadius: '0 0 12px 12px',
    animation: 'slideIn 0.4s ease-in-out',
  },
  greeting: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
  },
  userIcon: {
    marginRight: '0.5rem',
    fontSize: '1.25rem',
  },
  userText: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  logoutBtn: {
    padding: '0.4rem 1rem',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};
