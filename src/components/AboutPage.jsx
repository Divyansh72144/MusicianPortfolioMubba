import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Marcus Miller</h2>

          <div className="about-text">
            <p>
              Marcus Miller is a legendary bassist, composer, and producer whose influence on modern jazz, R&B, and fusion spans over four decades. Born in Brooklyn, New York in 1959, Miller displayed exceptional musical talent from an early age, mastering multiple instruments including bass guitar, saxophone, keyboards, and clarinet.
            </p>

            <p>
              His breakthrough came in the late 1970s when he began working with Miles Davis, contributing to some of the jazz legend's most celebrated albums including "Tutu," which Miller composed and produced. This collaboration showcased Miller's unique ability to blend jazz with contemporary sounds, establishing him as a visionary force in music.
            </p>

            <p>
              Throughout his illustrious career, Miller has worked with an extraordinary roster of artists including Luther Vandross, David Sanborn, Herbie Hancock, Chaka Khan, Aretha Franklin, and Elton John. His distinctive slap-bass technique and melodic approach have made him one of the most influential bassists in music history, inspiring generations of musicians worldwide.
            </p>

            <p>
              As a solo artist, Miller has released numerous acclaimed albums and earned two Grammy Awards. His 2018 album "Laid Black" received a Grammy nomination for Best Contemporary Instrumental Album. Beyond performing, he continues to compose, produce, and mentor emerging artists while headlining major jazz festivals and venues around the world.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80"
              alt="Marcus Miller performing live"
            />
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">2x</span>
              <span className="highlight-text">Grammy Winner</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">40+</span>
              <span className="highlight-text">Years in Music</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">500+</span>
              <span className="highlight-text">Album Credits</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">∞</span>
              <span className="highlight-text">Inspiration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
