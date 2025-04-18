import { useState, useEffect } from 'react'; // Added missing imports
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

// Update User type to include optional avatar
type NavbarUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  avatar?: string; // Added optional avatar field
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">MyApp</Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" text="Home" currentPath={location.pathname} />
        
        {user ? (
          <>
            <NavLink to="/dashboard" text="Dashboard" currentPath={location.pathname} />
            <NavLink to="/profile" text="Profile" currentPath={location.pathname} />
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" text="Login" currentPath={location.pathname} />
            <NavLink to="/register" text="Register" currentPath={location.pathname} />
          </>
        )}
      </div>

      {user && (
        <div className="user-widget">
          <span>Hi, {user.name}</span>
          <img 
            src={(user as NavbarUser).avatar || '/default-avatar.png'} 
            alt="Profile" 
            className="user-avatar"
          />
        </div>
      )}
    </nav>
  );
};

// NavLink component remains unchanged
const NavLink = ({ to, text, currentPath }: { to: string; text: string; currentPath: string }) => (
  <Link 
    to={to} 
    className={`nav-link ${currentPath === to ? 'active' : ''}`}
  >
    {text}
  </Link>
);

export default Navbar;