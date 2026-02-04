import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="terms-page">
      <main className="terms-content">
        <h1>Terms and Conditions</h1>
        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to our website. By accessing and using this site, you agree to comply with the following terms and conditions.</p>
        </section>
        <section>
          <h2>2. Use of Service</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with all applicable laws.</p>
        </section>
        <section>
          <h2>3. Intellectual Property</h2>
          <p>All content on this website is owned by us or our licensors and is protected by copyright laws.</p>
        </section>
        <section>
          <h2>4. Limitation of Liability</h2>
          <p>We are not liable for any direct, indirect, or consequential damages arising from the use of this website.</p>
        </section>
        <section>
          <h2>5. Modifications</h2>
          <p>We reserve the right to modify these terms at any time. We recommend reviewing this page periodically.</p>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
