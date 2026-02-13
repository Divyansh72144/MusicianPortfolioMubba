import React, { useState, useEffect } from 'react'
import './PageHero.css'

const PageHero = ({ title, backgroundImage, showHomeInfo }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = backgroundImage
    img.onload = () => setImageLoaded(true)

    // If already cached
    if (img.complete) {
      setImageLoaded(true)
    }
  }, [backgroundImage])

  return (
    <section className="page-hero">
      <img
        src={backgroundImage}
        alt={title || "Hero background"}
        className={`page-hero-image ${imageLoaded ? 'loaded' : ''}`}
        fetchPriority="high"
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="page-hero-overlay">
        {showHomeInfo ? (
          <div className="content-wrapper">
            <div className="home-info-content">
              <h2 className="home-info-name">Humphrey Mubba</h2>
              <p className="home-info-description">
                Humphrey Mubba (born Humphrey Mbaruku) is a jazz bassist, songwriter and composer from Tanzania living in Finland. Both traditional jazz and African music form an important part of his life. His music fuses African rhythm and melodies with the spontaneity and freedom of jazz improvisation, igniting the body and awakening the mind.
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
