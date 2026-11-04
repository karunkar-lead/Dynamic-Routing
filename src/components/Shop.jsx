import React from 'react'
import Navbar from './Navbar'
import { Outlet, Link } from 'react-router-dom'
import ForwardBackward from './ForwardBackward'

const shop = () => {
  return (
    <>
      <Navbar />
      <ForwardBackward />
        
      <section className="about-section page-container">
        <h1>SHOP ShopZone</h1>
        <div className="categorielinks">
            <Link to="men"><button className="btn btn-primary">Men</button></Link>
            <Link to="women"><button className="btn btn-primary">Women</button></Link>
            <Link to="kids"><button className="btn btn-primary">Kids</button></Link>
        </div>
        <Outlet />
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>

    </>
  )
}

export default shop