import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/Z-logo-TransparetICO.ico" alt="Zenticare" className="logo-img" />
                    <span className="logo-text">Zenticare</span>
                </Link>
                <nav className="nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#how-it-works" className="nav-link">How it Works</a>
                    {/* <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a> */}
                </nav>
                <div className="header-actions">
                    <div className="lang-switcher">
                        {/* <span>🌐 English</span> */}
                    </div>
                    {/* <button className="btn btn-primary btn-sm">Dashboard</button> */}
                    {/* <div className="avatar">
                        <img src="https://i.pravatar.cc/150?u=Zenticare" alt="User" />
                    </div> */}
                </div>
            </div>
        </header>
    )
}
