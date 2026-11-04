
import React from 'react'
import Navbar from './Navbar'
import ForwardBackward from './ForwardBackward'

const About = () => {
  return (
    <>
      <Navbar />
      <ForwardBackward />

      <section className="about-section page-container">
        <h1>About ShopZone</h1>

        <p>
          Welcome to ShopZone, your simple and convenient online
          shopping destination. We aim to make shopping easier by
          bringing quality products together in one place.
        </p>

        <p>
          Our goal is to provide a smooth shopping experience with
          an easy-to-use interface and a collection of products
          that meet your everyday needs.
        </p>
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>
    </>
  )
}

export default About
