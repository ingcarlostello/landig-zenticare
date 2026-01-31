import './Testimonials.css'

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Zenticare reduced our no-show rate from 28% to just 7%. The ROI was immediate and substantial.",
            author: "Dr. Maria Santos",
            role: "Director, MediCare Clinic",
            initial: "D"
        },
        {
            quote: "The WhatsApp automation is a game-changer. Patients actually respond and confirm their appointments.",
            author: "Dr. Carlos Mendez",
            role: "Owner, Dental Plus",
            initial: "D"
        },
        {
            quote: "We recovered over $30,000 in just the first quarter. The recall campaigns practically run themselves.",
            author: "Dra. Ana Rodriguez",
            role: "Manager, HealthFirst",
            initial: "D"
        }
    ]

    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">Loved by clinics everywhere</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.initial}</div>
                                <div className="author-info">
                                    <strong>{t.author}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
