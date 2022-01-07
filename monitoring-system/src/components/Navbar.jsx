import React from "react";
import {Link} from "react-router-dom"
import Button from "./Button"

function Navbar(props)
{
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <a class="navbar-brand">AI Monitor</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page">
                              <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>Home</Link></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link">
                              <Link to="" style={{ textDecoration: 'none', color: 'black' }}>Features</Link></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link">
                              <Link to="" style={{ textDecoration: 'none', color: 'black' }}>About us</Link></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link">
                              <Link to="" style={{ textDecoration: 'none', color: 'black' }}>Contact us</Link></a>
                      </li>
                      <li>
                          <Link to="/Signup">
                          <Button name="Sign up" />
                          </Link>
                      </li>
                      <li>
                          <Link to="/Signin">
                          <Button name="Sign in" />
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </div>
    )
}

export default Navbar;