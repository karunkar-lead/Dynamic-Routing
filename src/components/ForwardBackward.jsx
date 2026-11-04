import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForwardBackward = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate(-1)}>Previous</button>
        <button onClick={() => navigate(1)}>Next</button>
    </div>
    // <>
    //   <Navbar />
        
    //   <section className="about-section page-container">
    //     <h1>ForwardBackward</h1>
    //     <button onClick={() => navigate(-1)}>Previous</button><br />
    //     <button onClick={() => navigate(1)}>Next</button><br />
    //   </section>

    //   <footer className="footer">
    //     © 2026 ShopZone. All rights reserved.
    //   </footer>

    // </>
  )
}

export default ForwardBackward