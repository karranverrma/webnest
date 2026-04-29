import { useState } from 'react';

export default function CTASection() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const service = formData.get('service')?.toString().trim();

    if (!name || !email || !phone || !service) {
      setFormStatus('Please fill all details first.');
      return;
    }

    setFormStatus(`Thanks ${name}. We received your request.`);
    event.currentTarget.reset();
  };

  return (
    <main id="pricing" className="section-block hero-form-block container">
      <div className="growth-copy">
        <h1>
          Website Development &amp; Designing <mark>for Business Growth</mark>
          <img className="toggle-sticker" src="/assets/toggle-sticker.jpg" alt="" />
        </h1>

        <p>
          Embrace AI chatbot technology in a GPT-4-supported communication tool
          to help your customers, empower your team, and reduce your workload.
        </p>

        <img
          className="asset-card guide-image"
          src="/assets/guide-card.jpg"
          alt="Guide: The Rotar AI Tutorial Hand Book"
        />
      </div>

      <div className="growth-aside">
        <form className="interactive-demo-form" onSubmit={handleSubmit}>
          <h3>You can start with just one click.</h3>

          <label className="field full-field">
            <span>Name</span>
            <input aria-label="Name" name="name" placeholder="Name" />
          </label>

          <div className="two-field-row">
            <label className="field">
              <span>Email</span>
              <input aria-label="Email" name="email" type="email" placeholder="Email" />
            </label>
            <label className="field">
              <span>Phone No</span>
              <input aria-label="Phone number" name="phone" type="tel" placeholder="Phone No" />
            </label>
          </div>

          <label className="field full-field">
            <span>Service</span>
            <select aria-label="Service" name="service" defaultValue="">
              <option value="" disabled>Service</option>
            <option>Marketing</option>
            <option>HR</option>
            <option>Customer Support</option>
            </select>
          </label>

          <button className="real-submit-button" type="submit" aria-label="Submit demo request">
            Submit <span>↗</span>
          </button>
          <p className="form-response" role="status" aria-live="polite">
            {formStatus}
          </p>
        </form>

        <div className="growth-stats image-stats">
          <img className="asset-card" src="/assets/stat-card.jpg" alt="500 companies use Rotar AI" />
          <img className="asset-card" src="/assets/service-card.jpg" alt="AI-driven customer service" />
        </div>
      </div>
    </main>
  );
}
