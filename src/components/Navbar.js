import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSparkles } from 'react-icons/tb';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <TbSparkles className="logo-icon" />
        AutoScene AI
      </Link>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
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
