
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import ForwardBackward from './ForwardBackward';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <ForwardBackward />

      <section className="hero">
        <div className="hero-content">
          <button onClick={() => navigate('/about')}>Redirect to About</button>
          <p className="tagline">WELCOME TO SHOPZONE</p>

          <h1>Discover Products You'll Love</h1>

          <p>
            Explore our collection of quality products at great prices.
            Find everything you need in one place.
          </p>

          <Link to="/products" className="primary-btn">
            Explore Products
          </Link>
        </div>

        <div className="hero-image">
          🛍️
        </div>
      </section>

      <section className="section page-container">
        <div className="section-heading">
          <h2>Why Shop With Us?</h2>
          <p>Simple shopping, quality products and a great experience.</p>
        </div>

        <div className="product-grid">
          <div className="product-card product-info">
            <h2>🚚 Fast Delivery</h2>
            <p>Get your favourite products delivered to your doorstep.</p>
          </div>

          <div className="product-card product-info">
            <h2>⭐ Quality Products</h2>
            <p>Discover products selected for quality and value.</p>
          </div>

          <div className="product-card product-info">
            <h2>💳 Easy Shopping</h2>
            <p>Enjoy a simple and convenient shopping experience.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>
    </>
  )
}

export default Home
