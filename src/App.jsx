import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TourSection from './components/TourSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

function App() {
  return (
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
}

export default App
