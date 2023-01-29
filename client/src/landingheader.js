import React from 'react';

export function LandingHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/schedule">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/employee">Employees</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
