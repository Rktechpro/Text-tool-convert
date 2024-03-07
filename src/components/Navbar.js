import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom';


export default function Navbar(props) {
  return (
    /* The code you provided is a functional component in React that represents a navigation bar. */
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-3" aria-current="page" to="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-3" aria-current="page" to="#">About</a>
            </li>
          </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable to dark mode</label>
            </div>
        </div>
      </div>
    </nav>
    
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'set title here',
  abouText: 'about'
};