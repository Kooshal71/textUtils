import React from 'react'
import PropTypes from "prop-types"

export default function Navbar(props) {
  return (
<nav className={`navbar bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontSize:'30px', margin:"auto"}}>{props.title}</a>
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark":"light"} mx-4`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "En" : "Dis"}able DarkMode`}</label>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: "Set title"
}