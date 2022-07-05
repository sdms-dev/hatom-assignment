import React from 'react'

export default function Header() {
  return (
    <header>
    <div className="logo"><a className="navbar-brand" href="/">
        <img src="assets/images/logo.svg" alt="logo"/></a></div>
    <nav className="navbar navbar-expand-lg bg-transparent">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a href="/" className="close-menu d-block d-lg-none"></a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Markets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Governance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Prices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Hatom Token</a>
            </li>
          </ul>
        </div>
    </nav>
    <div className="action-right">
      <a href="/" className="btn btn-primary app-btn d-none d-lg-block">App</a>
      <a href="/" className="btn btn-primary gradient-btn d-block d-lg-none elrond-btn"> 
      <img src="assets/images/elrond-logo.png" className="icon" alt=""/> Elrond</a>
    </div>
  </header>
  )
}
