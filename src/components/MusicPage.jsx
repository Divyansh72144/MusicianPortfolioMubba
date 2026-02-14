import React, { useState, useEffect } from 'react'
import musicinafricalogo from '../images/musicinafricalogo.svg'
import './MusicPage.css'
import { fetchData } from '../lib/sanityClient'
import { MUSIC_VIDEOS_QUERY } from '../lib/queries'

const MusicPage = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadVideos() {
      const data = await fetchData(MUSIC_VIDEOS_QUERY)
      if (data) {
        setVideos(data)
      }
      setLoading(false)
    }
    loadVideos()
  }, [])

  // Extract YouTube ID from URL
  const getYouTubeId = (url) => {
    if (!url) return ''
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    const match = url.match(regex)
    return match ? match[1] : ''
  }

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

  if (loading) {
    return (
      <section className="music-section">
        <div className="music-container">
          <div className="music-content-section">
            <h2 className="music-heading">music</h2>
            <p>Loading videos...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="music-section">
      <div className="music-container">
        <div className="music-content-section">
          <h2 className="music-heading">music</h2>

          <div className="videos-list">
            {videos.map((video) => (
              <div key={video._id} className="youtube-section">
                <div className="youtube-content">
                  <div className="youtube-text">
                    <h3 className="youtube-title">{video.title}</h3>
                    {video.description && (
                      <p className="youtube-description">{video.description}</p>
                    )}
                  </div>
                  <div className="youtube-video">
                    {video.videoType === 'youtube' && video.youtubeUrl && (
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}?enablejsapi=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                    {video.videoType === 'vimeo' && video.vimeoUrl && (
                      <iframe
                        src={video.vimeoUrl.replace('vimeo.com/', 'player.vimeo.com/video/')}
                        title={video.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                    {video.videoType === 'embed' && video.embedCode && (
                      <div dangerouslySetInnerHTML={{ __html: video.embedCode }} />
                    )}
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
