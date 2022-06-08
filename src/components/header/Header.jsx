import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/Cart'
const Header = () => {
const items=useCart()
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <Link to="/">
              Logo
            </Link>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart({items.length})
                </Link>
              </li>
        
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header