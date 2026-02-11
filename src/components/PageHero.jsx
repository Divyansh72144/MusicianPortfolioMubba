import React from 'react'
import './PageHero.css'

const PageHero = ({ title, backgroundImage, showHomeInfo }) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-hero-overlay">
        {showHomeInfo ? (
          <div className="content-wrapper">
            <div className="home-info-content">
              <h2 className="home-info-name">Marcus Miller</h2>
              <p className="home-info-description">
                Marcus Miller is a legendary bassist, composer, and producer who has shaped the sound of modern jazz, R&B, and fusion. With a career spanning over four decades, he has collaborated with icons like Miles Davis, Luther Vandross, and David Sanborn. A two-time Grammy winner, Miller continues to push the boundaries of music with his innovative bass techniques and genre-defying compositions.
              </p>
            </div>
          </div>
        ) : title ? (
          <div className="content-wrapper">
            <h1 className="page-hero-title">{title}</h1>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageHero
