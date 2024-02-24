import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-sm">
          <a className="navbar-brand" href="#">
            <h3 className="text-primary">Navbar</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
           
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
