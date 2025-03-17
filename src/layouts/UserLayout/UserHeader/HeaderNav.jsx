import React from "react";

function HeaderNav() {
  return (
    <nav className="navbar navbar-expand p-0 border-bottom">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <span className="nav-link text-black ps-0">
              Hi! <a href="">Sign In</a> or <a href="">Register</a>
            </span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black">Daily Deals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black">Brand Outlet</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black">Gift Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black">Help & Contact</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="" className="nav-link">
              Ship to
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Sell
            </a>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Watchlist
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My eBay
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black">
              <i className="bi bi-bell" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black pe-0">
              <i className="bi bi-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
