import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fs-4 fw-bold" to="/">LA COLLECTION</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/products">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="link-btns">
                    <NavLink to='/' className='btn btn-outline-primary mx-1'>Login</NavLink>
                    <NavLink to='/' className='btn btn-outline-primary mx-1'>Register</NavLink>
                    <NavLink to='/' className='btn btn-outline-primary mx-1'>Cart (0)</NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar