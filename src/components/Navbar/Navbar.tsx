import { useState }   from 'react';
import "./Navbar.css";
function Navbar() {
    const [menu,setMenu]=useState(false);
  return (
    <div>
        <nav className="navbar">
            <h2 className="logo">MediCore</h2>
         <div id='menu-mobile'
         
        // className="menu-icon"
        className={`menu-icon ${menu ? "open" : ""}`}
        onClick={() => setMenu(!menu)}
         >
  <span className="dash"></span>
  {/* <br></br> */}
  <span className="dash"></span>
  {/* <br></br> */}
  <span className="dash"></span>
</div>
            <ul className={`nav-links ${menu ? "active" : ""}`}>
                <li><a href="#" 
                onClick={()=>setMenu(false)}
                >Services</a></li>
                <li><a href="#"
                onClick={()=>setMenu(false)}
                >About</a></li>
                <li><a href="#"
                onClick={()=>setMenu(false)}
                >Testimonials</a></li>
                <li><a href="#"
                onClick={()=>setMenu(false)}
                >FAQ</a></li>
                <li className="btn-book"><a href="#">Book Now</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar