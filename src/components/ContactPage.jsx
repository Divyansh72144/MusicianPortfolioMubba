import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const bookingContacts = [
    {
      region: 'North America',
      name: 'UTA (United Talent Agency)',
      email: 'bookings@unitedtalent.com',
      phone: '+1 (310) 273-6700'
    },
    {
      region: 'Europe',
      name: 'Earth Agency',
      email: 'europe@earthagency.com',
      phone: '+44 20 7841 4400'
    },
    {
      region: 'Asia & Pacific',
      name: 'AEG Presents Asia',
      email: 'asia@aegpresents.com',
      phone: '+81 3 6434 8800'
    },
    {
      region: 'South America',
      name: 'Move Concerts',
      email: 'latam@moveconcerts.com',
      phone: '+55 11 3051 9700'
    }
  ]

  const managementContacts = [
    {
      title: 'General Management',
      name: 'Mark G. Miller',
      email: 'mgmt@marcusmiller.com',
      phone: '+1 (212) 555-0123'
    },
    {
      title: 'Press & Media Inquiries',
      name: 'Davis & Associates PR',
      email: 'press@marcusmiller.com',
      phone: '+1 (323) 555-0456'
    },
    {
      title: 'Licensing & Sync',
      name: 'Sony Music Publishing',
      email: 'licensing@sonypub.com',
      phone: '+1 (212) 833-8000'
    }
  ]

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left - Image */}
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=900&fit=crop"
            alt="Marcus Miller"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Contact</h2>

          {/* Booking by Region */}
          <div className="contact-block">
            <h3 className="contact-block-title">Booking by Region</h3>
            <div className="contact-grid">
              {bookingContacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <h4 className="contact-region">{contact.region}</h4>
                  <p className="contact-name">{contact.name}</p>
                  <a href={`mailto:${contact.email}`} className="contact-email">
                    {contact.email}
                  </a>
                  <p className="contact-phone">{contact.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Artist Management */}
          <div className="contact-block">
            <h3 className="contact-block-title">Artist Management</h3>
            <div className="contact-grid management-grid">
              {managementContacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <h4 className="contact-region">{contact.title}</h4>
                  <p className="contact-name">{contact.name}</p>
                  <a href={`mailto:${contact.email}`} className="contact-email">
                    {contact.email}
                  </a>
                  <p className="contact-phone">{contact.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
