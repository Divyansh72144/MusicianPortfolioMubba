import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TourSection from './components/TourSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import PageHero from './components/PageHero'
import HomeContent from './components/HomeContent'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'

// Placeholder components for other pages
const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title=""
        backgroundImage="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1920&q=80"
        showHomeInfo={true}
      />
      <HomeContent />
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

const About = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title="ABOUT"
        backgroundImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
      />
      <AboutPage />
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

const GearPage = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title="MARCUS' GEAR"
        backgroundImage="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1920&q=80"
      />
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Marcus' Gear</h1>
        <p>Coming soon...</p>
      </section>
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

const CruisesPage = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title="JAZZ CRUISES"
        backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
      />
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Jazz Cruises</h1>
        <p>Coming soon...</p>
      </section>
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

const Contact = () => (
  <div className="App">
    <Header />
    <main>
      <ContactPage />
      <NewsletterSection />
      <Footer />
    </main>
  </div>
)

const TourPage = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title="TOUR"
        backgroundImage="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80"
      />
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
      <Route path="/about" element={<About />} />
      <Route path="/gear" element={<GearPage />} />
      <Route path="/cruises" element={<CruisesPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
