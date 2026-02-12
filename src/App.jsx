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
import ShopHero from './components/ShopHero'
import ShopPage from './components/ShopPage'

// Import images
import mubbaHome from './images/mubbaHome.jpg'
import MubbaAbout from './images/MubbaAbout.jpg'
import MubbaGear from './images/MubbaGear.jpg'
import mubbaTour from './images/mubbaTour.jpg'

// Placeholder components for other pages
const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <PageHero
        title=""
        backgroundImage={mubbaHome}
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
        backgroundImage={MubbaAbout}
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
        backgroundImage={MubbaGear}
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

const Shop = () => (
  <div className="App">
    <Header />
    <main>
      <ShopHero title="SHOP" />
      <ShopPage />
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
        backgroundImage={mubbaTour}
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
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
