import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useAppSelector } from '../../store/hooks';
import './Header.css';
import { Cart } from '../../components';
import { LogoIcon } from '../../assets/icons/icons';

interface HeaderProps {
  showSkewBackground?: boolean;
}

export const Header: FC<HeaderProps> = ({ showSkewBackground = true }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className={`header-container${!showSkewBackground ? ' no-skew' : ''}`}>
      <Link to="/" className="logo-container">
        <LogoIcon className="logo-icon" />
      </Link>

      <div className="header-content">
        <nav className="nav-list">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/company" 
            className={`nav-link ${location.pathname === '/company' ? 'active' : ''}`}
          >
            Company
          </Link>
          {user ? (
            <button 
              onClick={handleSignOut}
              className="nav-link sign-out-btn"
            >
              Sign Out
            </button>
          ) : (
            <Link 
              to="/login" 
              className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
            >
              Login
            </Link>
          )}
        </nav>
        <Cart />
      </div>
    </header>
  );
}; 