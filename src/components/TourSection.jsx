import React from 'react'
import TourWidget from './TourWidget'
import './TourSection.css'

const TourSection = () => {
  return (
    <section className="tour-section">
      <div className="tour-container">
        <div className="tour-image-section">
          <img 
            src="https://static.codia.ai/image/2026-02-11/vzeC6BAVWj.png" 
            alt="Mubba performing live" 
            className="tour-image"
          />
        </div>
        <div className="tour-spacer"></div>
        <div className="tour-content-section">
          <h2 className="tour-heading">tour</h2>
          <TourWidget />
        </div>
      </div>
    </section>
  )
}

export default TourSection
