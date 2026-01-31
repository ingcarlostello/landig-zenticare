import './Features.css'

export default function Features() {
    const features = [
        {
            icon: "💬",
            title: "WhatsApp Automation",
            description: "Automated appointment reminders, confirmations, and follow-ups through WhatsApp Business API."
        },
        // {
        //     icon: "📅",
        //     title: "Smart Scheduling",
        //     description: "AI-powered scheduling that optimizes your calendar and reduces gaps between appointments."
        // },
        {
            icon: "📈",
            title: "Revenue Recovery",
            description: "Track and recover lost revenue from no-shows with automated recall campaigns."
        },
        // {
        //     icon: "👨‍👩‍👧‍👦",
        //     title: "Patient CRM",
        //     description: "Complete patient management with history, preferences, and engagement scoring."
        // },
        {
            icon: "🔔",
            title: "Recall Campaigns",
            description: "Automated recall reminders that bring patients back for routine visits and follow-ups."
        },
        // {
        //     icon: "🛡️",
        //     title: "Payment Verification",
        //     description: "Secure payment proof uploads and verification to reduce payment disputes."
        // }
    ]

    return (
        <section id="features" className="section features">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Features</span>
                    <h2 className="section-title">Everything you need<br />to eliminate no-shows</h2>
                    <p className="section-description">A complete suite of tools designed specifically for medical practices.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
