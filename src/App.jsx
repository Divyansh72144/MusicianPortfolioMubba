import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TourSection from './components/TourSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

// Placeholder components for other pages
const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Welcome to Marcus Miller's Official Site</h1>
      </section>
      <Footer />
    </main>
  </div>
)

const AboutPage = () => (
  <div className="App">
    <Header />
    <main>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>About Marcus Miller</h1>
        <p>Coming soon...</p>
      </section>
      <Footer />
    </main>
  </div>
)

const GearPage = () => (
  <div className="App">
    <Header />
    <main>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Marcus' Gear</h1>
        <p>Coming soon...</p>
      </section>
      <Footer />
    </main>
  </div>
)

const CruisesPage = () => (
  <div className="App">
    <Header />
    <main>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Jazz Cruises</h1>
        <p>Coming soon...</p>
      </section>
      <Footer />
    </main>
  </div>
)

const ContactPage = () => (
  <div className="App">
    <Header />
    <main>
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Contact</h1>
        <p>Coming soon...</p>
      </section>
      <Footer />
    </main>
  </div>
)

const TourPage = () => (
  <div className="App">
    <Header />
    <main>
      <HeroSection />
      <TourSection />
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gear" element={<GearPage />} />
      <Route path="/cruises" element={<CruisesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
