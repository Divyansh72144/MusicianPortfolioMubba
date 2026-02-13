import React from 'react'
import musicinafricalogo from '../images/musicinafricalogo.svg'
import './MusicPage.css'

const MusicPage = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@mubba1577',
      handle: '@mubba1577'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/humphrey_mubba',
      handle: '@humphrey_mubba'
    },
    {
      name: 'Music In Africa',
      url: 'https://www.musicinafrica.net/directory/mubba',
      icon: musicinafricalogo,
      customClass: 'music-in-africa'
    }
  ]

  const videos = [
    {
      id: 'NmwDP-a36mQ',
      title: 'Humphrey Mubba - KWETU MASHARIKI',
      description: 'Kwetu Mashariki is a song telling the real story about Africa focusing on specific country Tanzania that has so many incredible things like Mount Kilimanjaro, Serengeti National park and so many tourists sites. Despite all this beautiful sites this songs talks about three common enemy that the people are facing which are diseases, alot of ignorance and poverty.'
    },
    {
      id: 'umA0Nb9IZ1M',
      title: 'Humphrey Mubba - SUBLIMITY',
      description: 'I have experienced some of enjoyable, beautiful moments in my life that i cannot be able to explain. All of this moments are wrapped up in this song and i hope it will make you remember some moments in your life.'
    },
    {
      id: 'f0wxCrTMKh8',
      title: 'Humphrey Mubba - DARAJA',
      description: 'Daraja is a Swahili word that means bridge. This song talks about two people meeting in a bridge and both of them they have a common goal that they are supposed to accomplish. The song explains that having a certain desire or wish without putting in the work then it is just a dream and nothing else. Enjoy some good music.'
    },
    {
      id: '2F4bgNYu6qE',
      title: 'Humphrey Mubba - NAUGULIA',
      description: 'Naugulia is a swahili song that talks alot about love and how love at first sight makes someone feel. Enjoy!'
    },
    {
      id: 'xdEO6FcbBj4',
      title: 'Humphrey Mubba - BROKEN STRING',
      description: 'The bitterest tears shed over graves are for words left unsaid and deeds left undone'
    },
    {
      id: '0yEr5uy_GJ0',
      title: 'Humphrey Mubba - HESABU',
      description: 'Hesabu is a powerful tune that reminds every tanzania of the song that we were taught in school in order to love mathematics. In this peace Hesabu is used in the same way but specifically to direct the person in life.'
    }
  ]

  return (
    <section className="music-section">
      <div className="music-container">
        <div className="music-content-section">
          <h2 className="music-heading">music</h2>

          <div className="videos-list">
            {videos.map((video, index) => (
              <div key={index} className="youtube-section">
                <div className="youtube-content">
                  <div className="youtube-text">
                    <h3 className="youtube-title">{video.title}</h3>
                    <p className="youtube-description">{video.description}</p>
                  </div>
                  <div className="youtube-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="social-links-section">
            <h3 className="social-section-title">Connect With Mubba</h3>
            <div className="social-links-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card"
                >
                  <div className={`social-content ${social.customClass || ''}`}>
                    {social.icon && <img src={social.icon} alt={social.name} className="social-icon" />}
                    <div className="social-info">
                      <h4 className="social-name">{social.name}</h4>
                      {social.handle && <p className="social-handle">{social.handle}</p>}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MusicPage
