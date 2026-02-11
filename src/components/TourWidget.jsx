import React from 'react'
import TourEvent from './TourEvent'
import './TourWidget.css'

const TourWidget = () => {
  const tourEvents = [
    {
      date: "Sat, MAR 28",
      venue: "Double Tree Hotel",
      location: "Reading Manor, PA"
    },
    {
      date: "Fri, MAY 22",
      venue: "Birchmere",
      location: "Alexandria, VA"
    },
    {
      date: "Sat, MAY 23",
      venue: "Birchmere",
      location: "Alexandria, VA"
    },
    {
      date: "Sun, MAY 24",
      venue: "Rams Head On Stage",
      location: "Annapolis, MD"
    },
    {
      date: "Thu, JUN 11",
      venue: "Brian Culbertson's Napa Valley Jazz Getaway 2026",
      location: "Napa, CA"
    },
    {
      date: "Thu, JUN 25",
      venue: "Place des Arts - Maison Symphonique",
      location: "Montréal, Canada"
    },
    {
      date: "Tue, JUN 30",
      venue: "Cemil Topuzlu Open Air Theatre",
      location: "Şişli, Turkey"
    },
    {
      date: "Thu, JUL 2",
      venue: "Városháza tér",
      location: "Budapest, Hungary"
    },
    {
      date: "Fri, JUL 3",
      venue: "Amphitheater of the Wolski Cultural Center in Sowiński Park",
      location: "Warszawa, Poland"
    },
    {
      date: "Sat, JUL 4",
      venue: "Jazz à Vienne 2026",
      location: "Vienne, France"
    }
  ]

  return (
    <div className="tour-widget">
      <div className="tour-widget-header">
        <p className="track-text">Track to get concert, live stream and tour updates.</p>
      </div>
      
      <div className="tour-nav-bar">
        <div className="nav-tabs">
          <span className="nav-tab active">Upcoming Dates</span>
          <span className="nav-tab">Past Dates</span>
        </div>
        <div className="bit-logo">
          <img 
            src="https://static.codia.ai/image/2026-02-11/GzphzSxfYN.png" 
            alt="Bit logo" 
            className="bit-logo-icon"
          />
          <img 
            src="https://static.codia.ai/image/2026-02-11/9FUGUYuAtX.png" 
            alt="Bit text" 
            className="bit-logo-text"
          />
        </div>
      </div>

      <div className="tour-events-container">
        <div className="tour-events-list">
          {tourEvents.map((event, index) => (
            <TourEvent key={index} {...event} />
          ))}
        </div>
        
        <button className="show-all-dates-btn">
          SHOW ALL DATES
        </button>
      </div>
    </div>
  )
}

export default TourWidget
