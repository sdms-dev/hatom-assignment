import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="container footer-links-main">
          <div className="row">
            <div className="col">
              <img src="assets/images/footer-logo.svg" className="img-fluid" alt="footer Logo"/> 
            </div>
            <div className="col">
              <h6>Protocol</h6>
              <ul className="footer-link list-unstyled" >
                <li><a href="/">Markets</a></li>
                <li><a href="/">Prices</a></li>
                <li><a href="/">Docs</a></li>
              </ul>
            </div>
            <div className="col">
              <h6>Governance</h6>
              <ul className="footer-link list-unstyled" >
                <li><a href="/">Overview</a></li>
                <li><a href="/">Hatom token</a></li>
              </ul>
            </div>
            <div className="col">
              <h6>Security</h6>
              <ul className="footer-link list-unstyled" >
                <li><a href="/">Audits</a></li>
                <li><a href="/">Formal Verifications</a></li>
                <li><a href="/">Economic Security</a></li>
                <li><a href="/">Bug Bounty</a></li>
              </ul>
            </div>
            <div className="col text-end">
              <a href="/" className="btn btn-primary app-btn d-none d-md-block">App</a>
            </div>
          </div>
          <div className="row">
            <div className="copyright-text"> <div className="latest-block d-block d-md-none">Latest Block: 14296113</div> © 2022 Hatom ,LLC.</div>
          </div>
        </div>
         <div className="row d-none d-block-md">
            <div className="latest-block">Latest Block: 14296113</div>
          </div>
    </footer>
  )
}
