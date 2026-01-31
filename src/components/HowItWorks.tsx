import './HowItWorks.css'

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Your Calendar",
            description: "Integrate with your existing practice management system in minutes. We support all major platforms.",
            isLast: false
        },
        {
            number: "02",
            title: "Set Up Automations",
            description: "Configure WhatsApp reminders, confirmations, and recall campaigns with our visual rule builder.",
            isLast: false
        },
        {
            number: "03",
            title: "Watch Revenue Grow",
            description: "See immediate results as no-shows decrease and patient engagement increases automatically.",
            isLast: true
        }
    ]

    return (
        <section id="how-it-works" className="section how-it-works">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">How it Works</span>
                    <h2 className="section-title">Get started in three simple steps</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-header">
                                <span className="step-number">{step.number}</span>
                                {!step.isLast && <div className="step-connector">→</div>}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="suggestion-card">
                    <div className="suggestion-icon">
                        💡
                    </div>
                    <h3 className="suggestion-title">Suggest a Feature</h3>
                    <p className="suggestion-desc">What feature would you like to see in the future?</p>
                    <a
                        href="https://forms.gle/y7kcPYRRyErcjR8h6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="suggestion-btn"
                    >
                        Open Form
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
