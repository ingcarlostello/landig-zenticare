import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    {/* <div className="badge">
                        <span className="badge-dot"></span>
                        Now with WhatsApp Business API →
                    </div> */}
                    <h1 className="hero-title">
                        Eliminate No-Shows.<br />
                        <span className="text-gradient">Recover Revenue.</span>
                    </h1>
                    <p className="hero-description">
                        The complete patient engagement platform that helps clinics reduce missed appointments by 73% and recover thousands in lost revenue through intelligent automation.
                    </p>
                    <div className="hero-actions">
                        {/* <button className="btn btn-primary btn-lg">Get a Demo →</button>
                        <button className="btn btn-outline btn-lg">▶ See How it Works</button> */}
                    </div>
                </div>

                {/* <div className="hero-image-wrapper"> */}
                <div className="hero-image-wrapper">
                    <img src="/screenShot.png" alt="Zenticare Dashboard" className="hero-screenshot" />
                </div>

                <div className="social-proof">
                    <div className="stat-item">
                        <strong>73%</strong>
                        <span>reduction in no-shows</span>
                        <small>MediCare Clinic</small>
                    </div>
                    <div className="stat-item">
                        <strong>$24K</strong>
                        <span>recovered monthly</span>
                        <small>Dental Plus</small>
                    </div>
                    <div className="stat-item">
                        <strong>98%</strong>
                        <span>confirmation rate</span>
                        <small>HealthFirst</small>
                    </div>
                    <div className="stat-item">
                        <strong>4.2x</strong>
                        <span>ROI in 90 days</span>
                        <small>City Medical</small>
                    </div>
                </div>
                {/* <div className="trust-logos">
                    <span>Trusted by 500+ clinics across Latin America</span>
                    <div className="logos-row">
                        <span>HIPAA</span>
                        <span>SOC2</span>
                        <span>ISO 27001</span>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
