import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">TOUR</h1>
        </div>
      </div>
      <div className="show-more-section">
        <img 
          src="https://static.codia.ai/image/2026-02-11/Y2je8dvkCE.png" 
          alt="Show more" 
          className="show-more-image"
        />
      </div>
    </section>
  )
}

export default HeroSection
