import './Pricing.css'

export default function Pricing() {
    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Pricing</span>
                    <h2 className="section-title">Simple, transparent pricing</h2>
                    <p className="section-description">Start free, scale as you grow. No hidden fees.</p>
                </div>

                <div className="pricing-grid">
                    {/* Starter Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h3>Starter</h3>
                            <p>For small clinics getting started</p>
                        </div>
                        <div className="price">
                            <span className="amount">$99</span>
                            <span className="period">/month</span>
                        </div>
                        <ul className="features-list">
                            <li>✓ Up to 500 patients</li>
                            <li>✓ WhatsApp reminders</li>
                            <li>✓ Basic analytics</li>
                            <li>✓ Email support</li>
                        </ul>
                        <button className="btn btn-outline full-width">Start Free Trial</button>
                    </div>

                    {/* Professional Plan */}
                    <div className="pricing-card popular">
                        <div className="popular-tag">Most Popular</div>
                        <div className="card-header">
                            <h3>Professional</h3>
                            <p>For growing practices</p>
                        </div>
                        <div className="price">
                            <span className="amount">$249</span>
                            <span className="period">/month</span>
                        </div>
                        <ul className="features-list">
                            <li>✓ Up to 2,000 patients</li>
                            <li>✓ WhatsApp + SMS reminders</li>
                            <li>✓ Recall campaigns</li>
                            <li>✓ Advanced analytics</li>
                            <li>✓ Priority support</li>
                            <li>✓ Payment verification</li>
                        </ul>
                        <button className="btn btn-primary full-width">Start Free Trial</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h3>Enterprise</h3>
                            <p>For multi-location clinics</p>
                        </div>
                        <div className="price">
                            <span className="amount">Custom</span>
                        </div>
                        <ul className="features-list">
                            <li>✓ Unlimited patients</li>
                            <li>✓ All channels</li>
                            <li>✓ Custom integrations</li>
                            <li>✓ Dedicated success manager</li>
                            <li>✓ SLA guarantee</li>
                            <li>✓ Custom reporting</li>
                        </ul>
                        <button className="btn btn-outline full-width">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
