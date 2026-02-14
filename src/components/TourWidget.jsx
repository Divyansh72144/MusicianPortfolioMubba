import React, { useState, useEffect } from 'react'
import TourEvent from './TourEvent'
import './TourWidget.css'
import { fetchData } from '../lib/sanityClient'
import { TOUR_DATES_QUERY } from '../lib/queries'

const TourWidget = () => {
  const [tourEvents, setTourEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTourDates() {
      const data = await fetchData(TOUR_DATES_QUERY)
      if (data) {
        // Format the date for display
        const formattedEvents = data.map(event => ({
          ...event,
          formattedDate: new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          }).toUpperCase()
        }))
        setTourEvents(formattedEvents)
      }
      setLoading(false)
    }
    loadTourDates()
  }, [])

  if (loading) {
    return <div className="tour-widget">Loading tour dates...</div>
  }

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
          {tourEvents.map((event) => (
            <TourEvent
              key={event._id}
              date={event.formattedDate}
              venue={event.venue}
              location={event.location}
              ticketUrl={event.ticketUrl}
              status={event.status}
            />
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
