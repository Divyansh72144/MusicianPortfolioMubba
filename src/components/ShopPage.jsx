import React, { useState, useEffect } from 'react'
import './ShopPage.css'
import { fetchData } from '../lib/sanityClient'
import { MERCHANDISE_QUERY } from '../lib/queries'

const ShopPage = () => {
  const [merchandise, setMerchandise] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMerchandise() {
      const data = await fetchData(MERCHANDISE_QUERY)
      if (data) {
        setMerchandise(data)
      }
      setLoading(false)
    }
    loadMerchandise()
  }, [])

  if (loading) {
    return (
      <section className="shop-page">
        <div className="content-wrapper">
          <p>Loading merchandise...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="shop-page">
      <div className="content-wrapper">
        <div className="shop-intro">
          <h2 className="shop-section-title">Official Merchandise</h2>
          <p className="shop-description">
            Get exclusive Humphrey Mubba merchandise including vinyl records, apparel, and collectibles.
          </p>
        </div>

        <div className="shop-grid">
          {merchandise.map((item) => {
            // Use imageUrl if available (external), otherwise use Sanity image, or placeholder
            const imageSrc = item.imageUrl || item.image?.asset?.url || 'https://via.placeholder.com/400'

            return (
              <div key={item._id} className="merchandise-card">
                <div className="merchandise-image">
                  <img src={imageSrc} alt={item.name} />
                  <span className="merchandise-category">{item.category}</span>
                </div>
                <div className="merchandise-info">
                  <h3 className="merchandise-name">{item.name}</h3>
                  <p className="merchandise-price">{item.price}</p>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShopPage
