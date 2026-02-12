import React from 'react'
import './ShopHero.css'

import SHOP1 from '../images/SHOP1.jpg'
import SHOP2 from '../images/SHOP2.jpg'

const ShopHero = ({ title }) => {
  return (
    <section className="shop-hero">
      <div className="shop-hero-left" style={{ backgroundImage: `url(${SHOP1})` }}></div>
      <div className="shop-hero-right" style={{ backgroundImage: `url(${SHOP2})` }}></div>
      <div className="shop-hero-overlay">
        <div className="content-wrapper">
          <h1 className="shop-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default ShopHero
