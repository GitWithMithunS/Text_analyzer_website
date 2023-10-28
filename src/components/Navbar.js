import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar(props) {
    const navigate = useNavigate();
  const abouthandelclicked=() => {
    navigate('/about')
  }
  const homehandelclicked=() => {
    navigate('/')
  }

  return (
    <div>
    <div>
    <nav className="navbar navbar-expand-lg  bg-body-tertiary"  data-bs-theme={props.mode} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <b>TEXT ANALYZER</b>
    </a>
    <button 
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <button style={{border:'none',backgroundColor:'transparent'}} onClick={homehandelclicked} >

            Home
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >
            <button style={{border:'none',backgroundColor:'transparent'}} onClick={abouthandelclicked}>

         About               
            </button>
          </a>
        </li>

      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
      {/* <div className={"form-check form-switch text-"+props.namecolor }> */}
      <div className={`form-check form-switch text-${props.namecolor} `}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" ><b>{props.modename}</b></label>
</div>


    </div>
  </div>
</nav>


    </div>
    </div>
  )
}

Navbar.propTypes = {
  title : PropTypes.string,            //defining the type of prop (here its a string .only strings can be input in this area)
}
