import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { HomePage } from './pages/HomePage/HomePage';
import { CartPage } from './pages/CartPage/CartPage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import CompanyPage from './pages/CompanyPage/CompanyPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './store/hooks';
import { setUser } from './store/authSlice';
import { resetCart } from './store/cartSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      if (!user) {
        dispatch(resetCart());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Route>
    </Routes>
  );
};

export default App; 