import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">✦</span> PixelMind AI
          <p>AI-powered product images for your Shopify store.</p>
        </div>
        <div className="footer-links">
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} PixelMind AI. All rights reserved.</p>
    </footer>
  );
}
