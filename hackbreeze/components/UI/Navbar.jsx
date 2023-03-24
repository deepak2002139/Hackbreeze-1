import React from "react";
import '../navbar.css';
const Navbar = () => {
   return (
<nav className="nav">
    <a href="#" className="brand"> HackBreeze</a>
    <div className="navigation_menu">
    <ul>
        <li className="nav_item"><a href="#" className="nav_link">Practice</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Compete</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Learn</a></li>
        <div className="vl">
        <li className="nav_item"><a href="#" className="nav_link1">Contact us</a></li></div>

    </ul>
    </div>
    
</nav>


   )
  };
  
  export default Navbar;