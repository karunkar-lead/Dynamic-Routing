
import React from 'react'
import Navbar from './Navbar'
import products from '../data/data'
import { Link } from 'react-router-dom'
import ForwardBackward from './ForwardBackward'

const Products = () => {
  return (
    <>
      <Navbar />
      <ForwardBackward />

      <section className="section page-container">
        <div className="section-heading">
          <h1>Our Products</h1>
          <p>Explore our latest collection of products.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <div className="product-info">
                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <div className="product-price">
                  ${product.price}
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="view-btn"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>
    </>
  )
}

export default Products
