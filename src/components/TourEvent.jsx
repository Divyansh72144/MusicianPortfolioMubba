import React from 'react'
import './TourEvent.css'

const TourEvent = ({ date, venue, location, ticketUrl, status = 'available' }) => {
  const isSoldOut = status === 'sold-out'
  const isCancelled = status === 'cancelled'

  return (
    <div className="tour-event">
      <div className="event-details">
        <div className="event-date">{date}</div>
        <div className="event-venue">{venue}</div>
        <div className="event-location">{location}</div>
      </div>

      <div className="event-actions">
        <button
          className="tickets-btn"
          onClick={() => ticketUrl && window.open(ticketUrl, '_blank')}
          disabled={isSoldOut || isCancelled}
        >
          <span className="btn-text">
            {isCancelled ? 'CANCELLED' : isSoldOut ? 'SOLD OUT' : 'TICKETS'}
          </span>
        </button>
        <button className="rsvp-btn">
          <span className="btn-text">RSVP</span>
        </button>
      </div>
    </div>
  )
}

export default TourEvent
