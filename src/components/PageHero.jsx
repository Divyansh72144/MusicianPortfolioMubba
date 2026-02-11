import React from 'react'
import './PageHero.css'

const PageHero = ({ title, backgroundImage }) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-hero-overlay">
        {title && (
          <div className="content-wrapper">
            <h1 className="page-hero-title">{title}</h1>
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
