import React from 'react';
import '../App.css';

const Navbar = ({ setcategory, toggleTheme, isDarkTheme }) => {
  return (
    <nav className={`navbar ${isDarkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={`badge ${isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'} fs-4`}>
            News101
          </span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('technology')}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('business')}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('health')}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('science')}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('sports')}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('entertainment')}>
                Entertainment
              </div>
            </li>
          </ul>
          <button 
            className={`btn ${isDarkTheme ? 'btn-light text-dark' : 'btn-dark text-light'} ms-3`} 
            onClick={toggleTheme}
          >
            {isDarkTheme ? 'Light' : 'Dark'} Theme
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
