import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext(null);

const AUTH_KEY = 'pippin-pals:user';

const readUser = () => {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY)) || null;
  } catch {
    return null;
  }
};

const USERS_KEY = 'pippin-pals:users';

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const writeUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readUser);

  const login = (email, password) => {
    const users = readUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      throw new Error('Email atau password salah. Silakan coba lagi.');
    }
    const { password: _, ...safeUser } = found;
    localStorage.setItem(AUTH_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
    toast.success(`Selamat datang kembali, ${safeUser.name}! 🐰`);
    return safeUser;
  };

  const register = (name, email, password) => {
    const users = readUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('Email ini sudah terdaftar. Coba login!');
    }
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      hugPoints: 0,
    };
    writeUsers([...users, newUser]);
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(AUTH_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
    toast.success(`Selamat datang di keluarga Pippin & Pals, ${name}! 🌿`);
    return safeUser;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
    toast.success('Sampai jumpa lagi! 👋');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
