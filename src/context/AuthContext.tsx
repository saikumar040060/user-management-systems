import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import apiClient from '../api/apiClient';

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
  error: string | null;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      apiClient.get('/users/me')
        .then(response => setUser(response.data.user))
        .catch(() => logout());
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const response = await apiClient.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
      throw err;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setError(null);
      const response = await apiClient.post('/auth/register', { name, email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Registration failed');
      throw err;
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      setError(null);
      const response = await apiClient.patch('/users/me', userData);
      setUser(prev => ({ ...prev!, ...response.data.user }));
    } catch (err: any) {
      setError(err.response?.data?.error || 'Update failed');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      updateUser, 
      error, 
      clearError 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};