import React, { useState } from 'react'
import './NewsletterSection.css'

const NewsletterSection = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { firstName, email })
  }

  return (
    <section className="newsletter-section">
      <div className="content-wrapper">
        <div className="newsletter-content">
          <p className="newsletter-title">SUBSCRIBE TO GET UPDATES FROM MARCUS MILLER</p>
          
          <div className="newsletter-form-container">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail Address"
                  className="form-input"
                  required
                />
              </div>
              
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
