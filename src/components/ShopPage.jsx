import React from 'react'
import './ShopPage.css'

const ShopPage = () => {
  const merchandise = [
    {
      id: 1,
      name: 'Laid Black Vinyl',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=400&h=400&fit=crop',
      category: 'Music'
    },
    {
      id: 2,
      name: 'Marcus Miller Signature T-Shirt',
      price: '$30.00',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'Apparel'
    },
    {
      id: 3,
      name: 'Afrodeezia CD',
      price: '$15.00',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
      category: 'Music'
    },
    {
      id: 4,
      name: 'Tour 2024 Hoodie',
      price: '$55.00',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      category: 'Apparel'
    },
    {
      id: 5,
      name: 'Renaissance Vinyl',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop',
      category: 'Music'
    },
    {
      id: 6,
      name: 'Bass Legend Cap',
      price: '$25.00',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      category: 'Accessories'
    },
    {
      id: 7,
      name: 'Free Concert Poster',
      price: '$20.00',
      image: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?w=400&h=400&fit=crop',
      category: 'Posters'
    },
    {
      id: 8,
      name: 'Marcus Miller Mug',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
      category: 'Accessories'
    }
  ]

  return (
    <section className="shop-page">
      <div className="content-wrapper">
        <div className="shop-intro">
          <h2 className="shop-section-title">Official Merchandise</h2>
          <p className="shop-description">
            Get exclusive Marcus Miller merchandise including vinyl records, apparel, and collectibles.
          </p>
        </div>

        <div className="shop-grid">
          {merchandise.map((item) => (
            <div key={item.id} className="merchandise-card">
              <div className="merchandise-image">
                <img src={item.image} alt={item.name} />
                <span className="merchandise-category">{item.category}</span>
              </div>
              <div className="merchandise-info">
                <h3 className="merchandise-name">{item.name}</h3>
                <p className="merchandise-price">{item.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopPage
