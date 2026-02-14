import React, { useState, useEffect } from 'react'
import './PageHero.css'
import { fetchData } from '../lib/sanityClient'
import { HOME_BIO_QUERY } from '../lib/queries'

const PageHero = ({ title, backgroundImage, showHomeInfo }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [homeBio, setHomeBio] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = backgroundImage
    img.onload = () => setImageLoaded(true)

    // If already cached
    if (img.complete) {
      setImageLoaded(true)
    }
  }, [backgroundImage])

  useEffect(() => {
    async function loadHomeBio() {
      const data = await fetchData(HOME_BIO_QUERY)
      if (data) {
        setHomeBio(data)
      }
    }
    if (showHomeInfo) {
      loadHomeBio()
    }
  }, [showHomeInfo])

  const bio = homeBio?.bio || 'Humphrey Mubba (born Humphrey Mbaruku) is a jazz bassist, songwriter and composer from Tanzania living in Finland. Both traditional jazz and African music form an important part of his life. His music fuses African rhythm and melodies with the spontaneity and freedom of jazz improvisation, igniting the body and awakening the mind.'

  return (
    <section className="page-hero">
      <img
        src={backgroundImage}
        alt={title || "Hero background"}
        className={`page-hero-image ${imageLoaded ? 'loaded' : ''}`}
        fetchpriority="high"
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="page-hero-overlay">
        {showHomeInfo ? (
          <div className="content-wrapper">
            <div className="home-info-content">
              <h2 className="home-info-name">Humphrey Mubba</h2>
              <p className="home-info-description">
                {bio}
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
