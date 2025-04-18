// src/components/NotFound/NotFound.tsx
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound; // Add this line