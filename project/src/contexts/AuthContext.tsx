import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'parent' | 'counselor';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Replace with actual API call
    const mockUser = {
      id: '1',
      name: 'Test User',
      email,
      role: 'student' as const,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate('/');
  };

  const signup = async (name: string, email: string, password: string, role: string) => {
    // TODO: Replace with actual API call
    const mockUser = {
      id: '1',
      name,
      email,
      role: role as 'student' | 'teacher' | 'parent' | 'counselor',
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};