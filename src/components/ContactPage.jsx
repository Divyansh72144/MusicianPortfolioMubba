import React from 'react'
import mubbaContact from '../images/mubbaContact.jpeg'
import './ContactPage.css'

const ContactPage = () => {
  const contactInfo = {
    name: 'Humphrey Mbaruku (Mubba)',
    phone: '+358 40 850 1301',
    email: 'hmbaruk@gmail.com'
  }

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/humphrey_mubba',
      handle: '@humphrey_mubba'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@mubba1577',
      handle: '@mubba1577'
    }
  ]

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left - Image */}
        <div className="contact-image">
          <img
            src={mubbaContact}
            alt="Mubba"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">{contactInfo.name}</p>

          {/* Direct Contact */}
          <div className="contact-block">
            <h3 className="contact-block-title">Contact Information</h3>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-label">Phone</span>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-value">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-label">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-value">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="contact-block">
            <h3 className="contact-block-title">Follow Mubba</h3>
            <div className="contact-grid social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <h4 className="social-name">{social.name}</h4>
                  <p className="social-handle">{social.handle}</p>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
