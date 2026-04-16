import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Branding from './pages/BrandingStandalone';
import Register from './pages/Register';
import { Toaster } from 'sonner';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster richColors position="top-right" />
        <Routes>
          <Route path="/branding" element={<Branding />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

