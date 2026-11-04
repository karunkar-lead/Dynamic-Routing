import React from 'react'
import menproducts from '../data/menproducts'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div className="product-grid">
          {menproducts.map((product) => (
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
  )
}

export default Men