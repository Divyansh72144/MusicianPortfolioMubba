import React, { useState, useEffect } from 'react'
import TourWidget from './TourWidget'
import './HomeContent.css'
import { fetchData } from '../lib/sanityClient'
import { YELLOW_BOX_QUERY } from '../lib/queries'

const HomeContent = () => {
  const [yellowBox, setYellowBox] = useState(null)

  useEffect(() => {
    async function loadYellowBox() {
      const data = await fetchData(YELLOW_BOX_QUERY)
      if (data) {
        setYellowBox(data)
      }
    }
    loadYellowBox()
  }, [])

  const announcementText = yellowBox?.text || 'New album "Echos from the West" coming soon!'

  return (
    <div className="home-content">
      {/* Announcement Section */}
      <section className="announcement-section">
        <div className="content-wrapper">
          <div className="announcement-box">
            <p className="announcement-text">
              We are refreshing our website. Thanks for your patience. Please check back soon
            </p>
            <p className="announcement-highlight">
              {announcementText}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="content-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/f0wxCrTMKh8"
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
