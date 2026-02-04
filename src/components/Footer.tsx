import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const LOOPS_API_URL = "https://app.loops.so/api/newsletter-form/cmkd49zug05oj0hz6tdf9agz2"
const RATE_LIMIT_DURATION = 60000 // 1 minute in milliseconds

export default function Footer() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [showBackButton, setShowBackButton] = useState(false)
    const [showForm, setShowForm] = useState(true)

    const validateEmail = (emailValue: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(emailValue)
    }

    const checkRateLimit = (): boolean => {
        if (typeof window === "undefined") {
            return false
        }

        const timestamp = new Date().valueOf()
        const previousTimestamp = localStorage.getItem("loops-form-timestamp")

        if (previousTimestamp && Number(previousTimestamp) + RATE_LIMIT_DURATION > timestamp) {
            return true
        }

        localStorage.setItem("loops-form-timestamp", timestamp.toString())
        return false
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            setEmailError("Email is required")
            return
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address")
            return
        }

        // Check rate limit
        const isRateLimited = checkRateLimit()
        if (isRateLimited) {
            setEmailError("Too many signups, please try again in a little while")
            setShowForm(false)
            setShowBackButton(true)
            return
        }

        setEmailError("")
        setIsSubmitting(true)

        try {
            const formBody = `userGroup=&mailingLists=&email=${encodeURIComponent(email)}`

            const response = await fetch(LOOPS_API_URL, {
                method: "POST",
                body: formBody,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })

            if (response.ok) {
                setIsSubmitted(true)
                setEmail("")
                setShowForm(false)
            } else {
                const responseText = await response.text()
                let data
                try {
                    data = JSON.parse(responseText)
                } catch {
                    data = { message: response.statusText }
                }
                setEmailError(data.message || "Oops! Something went wrong, please try again")
                setShowForm(false)
                setShowBackButton(true)
            }
        } catch (error) {
            // Check if it's a Failed to fetch error
            if (error instanceof Error && error.message === "Failed to fetch") {
                setEmailError("Too many signups, please try again in a little while")
                setShowForm(false)
                setShowBackButton(true)
                if (typeof window !== "undefined") {
                    localStorage.removeItem("loops-form-timestamp")
                }
            } else {
                setEmailError(
                    error instanceof Error && error.message
                        ? error.message
                        : "Oops! Something went wrong, please try again"
                )
                setShowForm(false)
                setShowBackButton(true)
                if (typeof window !== "undefined") {
                    localStorage.removeItem("loops-form-timestamp")
                }
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleReset = () => {
        setIsSubmitted(false)
        setEmailError("")
        setShowBackButton(false)
        setShowForm(true)
        setEmail("")
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        if (emailError) {
            setEmailError("")
        }
    }

    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-content">
                        <h2>Ready to eliminate no-shows?</h2>
                        <p>Join 500+ clinics already using Zenticare to recover revenue and improve patient engagement.</p>

                        <div className="waitlist-wrapper">
                            {isSubmitted ? (
                                <div className="success-message">
                                    <span>✅</span>
                                    <span>Thanks! We'll be in touch!</span>
                                </div>
                            ) : showForm ? (
                                <form className="footer-waitlist-form" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className={`footer-waitlist-input ${emailError ? 'input-error' : ''}`}
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                        {emailError && <p className="error-text">{emailError}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="footer-waitlist-submit"
                                        disabled={isSubmitting || !email || !validateEmail(email)}
                                    >
                                        {isSubmitting ? (
                                            <span className="loading-spinner">⏳</span>
                                        ) : (
                                            <>
                                                Join Waitlist
                                                <span className="arrow">→</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="error-container">
                                    {emailError && (
                                        <p className="error-text-center">{emailError}</p>
                                    )}
                                </div>
                            )}

                            {showBackButton && (
                                <div className="back-button-container">
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="back-button"
                                    >
                                        ← Back
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="footer-main">
                    <div className="footer-col">
                        <span className="logo-text">Zenticare</span>
                        <p className="footer-desc">The #1 patient engagement platform for medical practices.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                        <a href="#">Changelog</a>
                    </div>
                    <div className="footer-col">
                    </div>
                    <div className="footer-col">
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-links">
                        <p>© 2026 Zenticare Inc. All rights reserved.</p>
                        <Link to="/terms-and-conditions" className="footer-link">Terms and Conditions</Link>
                    </div>
                    <div className="socials">
                        <div className="social-icon"></div>
                        <div className="social-icon"></div>
                        <div className="social-icon"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
