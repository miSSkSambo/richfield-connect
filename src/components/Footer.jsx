import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><div className="footer-brand">RICHFIELD CONNECT</div><p>Learn together. Share responsibly. Grow as a community.</p></div>
        <div><h3>Explore</h3><div className="footer-links"><Link to="/about">About</Link><Link to="/signup">Create profile</Link><Link to="/feed">Community feed</Link></div></div>
        <div><h3>Institution</h3><p>Richfield Graduate Institute of Technology<br />South Africa</p><p>connect@richfield.ac.za</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Richfield Connect</span><span>Academic collaboration platform</span></div>
    </footer>
  );
}
