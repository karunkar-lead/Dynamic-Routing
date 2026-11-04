
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/data'
import Navbar from './Navbar'
import ForwardBackward from './ForwardBackward'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="not-found">
          <h1>Product Not Found</h1>
          <p>Sorry, the product you are looking for does not exist.</p>

          <button
            className="primary-btn"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <ForwardBackward />

      <section className="detail-section page-container">
        <div className="detail-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="detail-info">
            <h1>{product.title}</h1>

            <p>{product.description}</p>

            <div className="product-price">
              ${product.price}
            </div>

            <div className="detail-actions">
              <button
                className="primary-btn"
                onClick={() => alert('Product added to cart!')}
              >
                Add to Cart
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate('/products')}
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>
    </>
  )
}

export default ProductDetail
