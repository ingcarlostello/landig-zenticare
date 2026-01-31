import './index.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Footer />
    </div>
  )
}

export default App
