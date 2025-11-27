import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
  <h1>MyStore</h1>
  <ul>

   <li><Link to='/'>Home</Link></li>
   <li><Link to='/collection'>Collection</Link></li>
   <li><Link to='/about'>About</Link></li>
   <li><Link to='/contact'>Contact</Link></li>
   
  </ul>
</nav>

    </div>
  )
}

export default Navbar
