import { useState } from 'react';

const features = [
  {
    icon: '🎨',
    title: 'AI Product Images',
    desc: 'Generate stunning, studio-quality product photos in seconds using advanced AI — no photographer needed.',
  },
  {
    icon: '🛍️',
    title: 'Shopify Native',
    desc: 'Seamlessly integrated into your Shopify admin. Generate and publish images without leaving your store.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    desc: 'Get multiple image variations in under 10 seconds. Iterate fast and pick what converts best.',
  },
  {
    icon: '🎯',
    title: 'Brand Consistent',
    desc: 'Set your brand style once. Every generated image matches your aesthetic automatically.',
  },
  {
    icon: '🌍',
    title: 'Background Removal',
    desc: 'Automatically remove and replace backgrounds with lifestyle scenes, gradients, or custom settings.',
  },
  {
    icon: '📈',
    title: 'Boost Conversions',
    desc: "High-quality visuals increase trust and drive more sales. Upgrade your store's look instantly.",
  },
];

const steps = [
  { num: '01', title: 'Install the App', desc: 'Add PixelMind AI to your Shopify store in one click from the Shopify App Store.' },
  { num: '02', title: 'Select a Product', desc: 'Choose any product from your catalog and upload an existing photo or start from scratch.' },
  { num: '03', title: 'Describe Your Vision', desc: 'Type a simple prompt like "white sneaker on marble floor, soft lighting" and hit Generate.' },
  { num: '04', title: 'Publish Instantly', desc: 'Pick your favorite result and publish it directly to your product listing with one click.' },
];

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    desc: 'Perfect for new stores',
    features: ['50 AI images/month', 'Background removal', 'Basic styles', 'Email support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/month',
    desc: 'Most popular for growing brands',
    features: ['250 AI images/month', 'Background removal', 'All styles & presets', 'Brand kit', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    desc: 'For high-volume stores',
    features: ['Unlimited images', 'Background removal', 'All styles & presets', 'Brand kit', 'API access', 'Dedicated support'],
    cta: 'Go Pro',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Do I need design skills to use PixelMind AI?',
    a: 'Not at all. Just describe what you want in plain English and the AI handles the rest.',
  },
  {
    q: 'Can I use the generated images commercially?',
    a: 'Yes. All images generated through PixelMind AI are fully licensed for commercial use in your Shopify store.',
  },
  {
    q: 'What image formats are supported?',
    a: 'We export high-resolution PNG and JPEG files optimized for web and print.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! The Growth plan comes with a 7-day free trial. No credit card required.',
  },
  {
    q: 'How does billing work?',
    a: 'Billing is handled securely through Shopify. You\'ll be charged monthly through your Shopify account.',
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
              <div className="faq-q">
                {item.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">✦ Now on Shopify App Store</span>
          <h1 className="hero-title">
            Generate <span className="gradient-text">AI Product Images</span><br />
            That Actually Sell
          </h1>
          <p className="hero-sub">
            Turn plain product photos into stunning, conversion-ready visuals in seconds.
            Built exclusively for Shopify merchants.
          </p>
          <div className="hero-actions">
            <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Add to Shopify — Free Trial
            </a>
            <a href="#how-it-works" className="btn-ghost">See How It Works →</a>
          </div>
          <p className="hero-note">No credit card required · 7-day free trial · Cancel anytime</p>
        </div>
        <div className="hero-visual">
          <div className="image-card card-1">
            <div className="img-placeholder">
              <span>🧴</span>
              <small>Before</small>
            </div>
          </div>
          <div className="arrow-icon">→</div>
          <div className="image-card card-2 glow">
            <div className="img-placeholder ai">
              <span>✨🧴</span>
              <small>AI Generated</small>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <p className="proof-label">Trusted by 1,000+ Shopify merchants</p>
          <div className="proof-stats">
            <div><strong>50K+</strong><span>Images Generated</span></div>
            <div><strong>4.9★</strong><span>App Store Rating</span></div>
            <div><strong>+34%</strong><span>Avg. Conversion Lift</span></div>
            <div><strong>10s</strong><span>Generation Time</span></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <h2 className="section-title">Everything You Need to <span className="gradient-text">Look Professional</span></h2>
          <p className="section-sub">All the tools to create, manage, and publish AI product images — right inside Shopify.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section steps-section" id="how-it-works">
        <div className="container">
          <h2 className="section-title">Up and Running in <span className="gradient-text">4 Simple Steps</span></h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="section-sub">Start free. Scale as you grow. No hidden fees.</p>
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <div key={i} className={`pricing-card ${p.highlight ? 'highlight' : ''}`}>
                {p.highlight && <div className="popular-badge">Most Popular</div>}
                <h3>{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">{p.price}<span>{p.period}</span></div>
                <ul className="plan-features">
                  {p.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                </ul>
                <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer" className={p.highlight ? 'btn-primary' : 'btn-outline'}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your Product Images?</h2>
          <p>Join 1,000+ Shopify merchants already using PixelMind AI.</p>
          <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
            Add to Shopify — It's Free to Start
          </a>
        </div>
      </section>
    </main>
  );
}
