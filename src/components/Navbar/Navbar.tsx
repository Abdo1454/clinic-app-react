import React from 'react';
import "./Navbar.css";
function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <h2 className="logo">MediCore</h2>
            <ul className="nav-links">
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">FAQ</a></li>
                <li className="btn-book"><a href="#">Book Now</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar