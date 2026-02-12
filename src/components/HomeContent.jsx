import React from 'react'
import TourWidget from './TourWidget'
import './HomeContent.css'

const HomeContent = () => {
  return (
    <div className="home-content">
      {/* Announcement Section */}
      <section className="announcement-section">
        <div className="content-wrapper">
          <div className="announcement-box">
            <p className="announcement-text">
              We are reFRESHING our website. Thanks for your patience. Please check back soon
            </p>
            <p className="announcement-highlight">
              We are proud to announce that Laid Black has been nominated for a Grammy for Best Contemporary Instrumental Album!
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="content-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Marcus Miller Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section className="home-tour-section">
        <div className="content-wrapper">
          <h2 className="home-tour-heading">Upcoming Tour Dates</h2>
          <TourWidget />
        </div>
      </section>
    </div>
  )
}

export default HomeContent
