import {create} from 'zustand';
import Cookies from 'js-cookie';

type AuthState = {
  userId: string | null;
  error: string | null;
  login: (id: string, pw: string) => boolean; 
  logout: () => void;
};


const USERS = [
  { id: 'admin',  password: 'admin123' },
] as const;


const useAuthStore = create<AuthState>((set) => ({
  userId: Cookies.get('uid') ?? null,
  error: null,

  login: (id, pw) => {
    const matched = USERS.find((u) => u.id === id && u.password === pw);
    if (!matched) {
      set({ error: 'Invalid credentials' });
      return false;
    }
    Cookies.set('uid', matched.id, { expires: 7 });
    set({ userId: matched.id, error: null });
    return true;
  },

  logout: () => {
    Cookies.remove('uid');
    set({ userId: null, error: null });
  },
}));

export default useAuthStore;
