import React, { useState, useEffect } from 'react'
import mubbasAbout2 from '../images/mubbasAbout2.jpeg'
import './AboutPage.css'
import { fetchData } from '../lib/sanityClient'
import { ARTIST_BIO_QUERY } from '../lib/queries'

const AboutPage = () => {
  const [artistBio, setArtistBio] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBio() {
      const data = await fetchData(ARTIST_BIO_QUERY)
      if (data) {
        setArtistBio(data)
      }
      setLoading(false)
    }
    loadBio()
  }, [])

  if (loading) {
    return (
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">About Humphrey Mubba</h2>
            <p>Loading...</p>
          </div>
        </div>
      </section>
    )
  }

  const bio = artistBio?.bio || ''

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Humphrey Mubba</h2>

          <div className="about-text">
            {bio && bio.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-image">
            <img
              src={mubbasAbout2}
              alt="Humphrey Mubba performing live"
            />
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">2025</span>
              <span className="highlight-text">African Tour</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">2024</span>
              <span className="highlight-text">Sauti za Busara</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">4</span>
              <span className="highlight-text">Band Countries</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">2</span>
              <span className="highlight-text">Albums</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
