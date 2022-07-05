import React from 'react'

export default function HomePage() { 
  return (
    <>
    <section className="banner-section">
      <div className="img-wrapper">
        <img src="assets/images/bg-svg.svg" className="img-fluid d-none d-sm-block" alt=""/>
        <img src="assets/images/mobile-bg-svg.svg" className="img-fluid d-block d-sm-none" alt=""/>
      </div>
      <div className="container-fluid">
        <div className="title-container text-center">
          <h1 className="banner-title"><img src="assets/images/banner-heading.svg" className="img-fluid" alt="icon"/></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </section>

    <section className="d-none d-lg-block">
      <div className="container">
         <div className="devident-section">
            <div className="row">
              <div className="col-sm-6">
                  <h3>$9,449,627.26 <strong className="fw-normal">Dividends</strong></h3>
                  <p>Paid out to Hatom Token Holders over 3 years</p>
              </div>
              <div className="col-sm-6 text-end">
                <a href="/" className="btn gradient-btn">Buy Hatom Tokens</a>
              </div>
            </div>
         </div>   
      </div>
    </section> 

    <section className="features-wrapper">
      <div className="container p-0">
        <div className="title-section">
          <h2> <strong className="fw-normal">Features</strong> of Hatom Protocol</h2>
        </div>  
        <div className="row g-0 position-relative">
          <div className="col lines-bg d-block d-xl-none">
            <img src="assets/images/mobile-linesbg.svg" alt="icon"/>
            <div className="coin-image">
              <img src="assets/images/coin-image.png" alt="icon"/>
            </div>
          </div>
          <div className="col left-calumn">
            <div className="features-text">
              <h3>Earn</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p>tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
            </div>
            <div className="features-text mb-0">
              <h3>Borrow</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className="col lines-bg d-none d-xl-block">
            <img src="assets/images/linesbg.svg" alt="icon"/>
            <div className="coin-image">
              <img src="assets/images/coin-image.png" alt="icon"/>
            </div>
          </div>
          <div className="col right-calumn">
            <div className="features-text mb-0">
              <h3>Dividends</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.</p>
              <ul className="list-warpper list-unstyled">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit ametent.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit amet.ectetur adip from one ex-diivident date othe next</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="d-block d-lg-none">
      <div className="container">
         <div className="devident-section">
            <div className="row">
              <div className="col-lg-6  text-center text-lg-start">
                  <h3>$9,449,627.26 <strong className="fw-normal">Dividends</strong></h3>
                  <p>Paid out to Hatom Token Holders over 3 years</p>
              </div>
              <div className="col-lg-6 text-center text-lg-end ">
                <a href="/" className="btn gradient-btn">Buy Hatom Tokens</a>
              </div>
            </div>
         </div>   
      </div>
    </section> 
    </>
  )
}
