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
              Mubba (born Humphrey Mbaruku) is a jazz bassist, songwriter and composer from Tanzania living in Finland.
            </p>

            <p>
              Since his beginnings, both traditional jazz and African music form an important part of his life. He has been inspired by artists such as Richard Bona, Étienne M'Bapé, Marcus Miller, Tatu N'gane, Jimmy Dludlu, Jonathan Butler, Hugh Masékela, among other greats. Due to these varieties and legendary experience and exposure, his music connects with audiences from different cultures around Africa and other corners of the world as well.
            </p>

            <p>
              His music fuses African (Tanzania) rhythm and melodies with the spontaneity freedom of jazz improvisation, resistance and movement that ignites the body and awakens the mind. He has one album called Time which highlights the music that he is doing, it is in all digital platforms.
            </p>

            <p>
              He has a band called The Afro-Ryan which comprises musicians from TANZANIA, CHILE, ITALY, and FINLAND.
            </p>

            <p>
              He has done an African tour in 2025 which was sponsored by Goethe Institute on African countries like Ivory Coast, Kenya, Angola, Congo and etc.
            </p>

            <p>
              He has played on Sauti za Busara 2024 in Zanzibar.
            </p>

            <p>
              He has performed on Bc international jazz festival in Kenya 2024.
            </p>

            <p>
              He performed on Evergreen Jazz festival in Tanzania.
            </p>

            <p>
              He is now working on his second album called Echos from the West.
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
