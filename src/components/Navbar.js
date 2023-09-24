import React from 'react'

const Navbar = () => {
  return (
    <><nav className="navbar navbar-expand-lg " style={{background: 'rgb(238,174,202)',background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',}} >
    <div className="container-fluid"  >
      <h1 className="navbar-brand" style={{color:'white', fontFamily:'cursive'}}>Hayatım<span>&#x2764;&#xfe0f;</span></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
         
          
        </ul>
       
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar