import { TbSparkles } from 'react-icons/tb';

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <div className="container policy-container">
        <div className="policy-header">
          <TbSparkles size={36} className="policy-icon" />
          <h1>Privacy Policy</h1>
        </div>
        <p className="policy-date">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          AutoScene AI ("we", "our", or "us") operates as a Shopify application. This Privacy Policy explains how we collect,
          use, and protect information when you install and use our app.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you install AutoScene AI, we collect:</p>
        <ul>
          <li><strong>Store Information:</strong> Your Shopify store URL, store name, and email address.</li>
          <li><strong>Product Data:</strong> Product titles, descriptions, and images you choose to process with our app.</li>
          <li><strong>Usage Data:</strong> Number of images generated, feature usage, and app interaction logs.</li>
          <li><strong>Billing Information:</strong> Subscription plan details (payment is handled entirely by Shopify — we never store card details).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To generate AI product images based on your inputs and prompts.</li>
          <li>To deliver, maintain, and improve the app's features and performance.</li>
          <li>To send transactional emails (e.g., usage alerts, billing notifications).</li>
          <li>To provide customer support when you contact us.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell your personal data. We may share data with:</p>
        <ul>
          <li><strong>AI Providers:</strong> Image generation prompts and product images are sent to our AI processing partners solely to generate images.</li>
          <li><strong>Shopify:</strong> As required to operate within the Shopify platform.</li>
          <li><strong>Service Providers:</strong> Hosting, analytics, and support tools that help us operate the app, all bound by confidentiality agreements.</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain your store data for as long as you have the app installed. Generated images are stored for 30 days
          and then automatically deleted unless saved to your Shopify product listings. You may request deletion of your
          data at any time by contacting us.
        </p>

        <h2>5. Security</h2>
        <p>
          We use industry-standard encryption (TLS/HTTPS) for all data in transit and at rest. Access to your data is
          restricted to authorized personnel only. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to or restrict certain processing activities.</li>
          <li>Data portability (receive your data in a structured format).</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:privacy@autosceneai.com">privacy@autosceneai.com</a>.</p>

        <h2>7. Cookies</h2>
        <p>
          Our app uses minimal cookies necessary for authentication and session management within the Shopify admin.
          We do not use tracking or advertising cookies.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our app may contain links to third-party websites. We are not responsible for the privacy practices of those sites
          and encourage you to review their policies.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          AutoScene AI is not directed at individuals under the age of 18. We do not knowingly collect data from minors.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant changes via email or
          an in-app notification. Continued use of the app after changes constitutes acceptance of the updated policy.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@autosceneai.com">privacy@autosceneai.com</a></li>
          <li>Website: <a href="https://autosceneai.com">autosceneai.com</a></li>
        </ul>
      </div>
    </main>
  );
}
