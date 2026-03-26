import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="logo-icon">✦</span> PixelMind AI
      </Link>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="/#features" onClick={() => setOpen(false)}>Features</a></li>
        <li><a href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</a></li>
        <li><a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a></li>
        <li><a href="/#faq" onClick={() => setOpen(false)}>FAQ</a></li>
        <li>
          <a
            href="https://apps.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav"
            onClick={() => setOpen(false)}
          >
            Add to Shopify
          </a>
        </li>
      </ul>
    </nav>
  );
}
