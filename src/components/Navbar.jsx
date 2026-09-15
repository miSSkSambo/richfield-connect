import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { state } = useAppContext();
  const links = [
    ['Home', '/'], ['About', '/about'], ['Sign Up', '/signup'], ['Profile', '/profile'], ['Feed', '/feed'],
  ];
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Richfield Connect home">
          <span className="brand-mark">RC</span>
          <span><strong>Richfield</strong><small>CONNECT</small></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>
          ))}
        </nav>
        <span className="nav-status">{state.user ? `Hi, ${state.user.fullName.split(' ')[0]}` : 'Student community'}</span>
      </div>
    </header>
  );
}
