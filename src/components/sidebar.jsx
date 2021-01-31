import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Zahid Nur Al Azami</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#portfolio" data-nav-section="portfolio">Portfolios</a></li>
                  <li><a href="#lac" data-nav-section="lac">Licences, Badges, and Certificate</a></li>
                  <li><a href="#oe" data-nav-section="oe">Organizational Experiences</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.instagram.com/zahid_na" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/zahidna" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin22" /></a></li>
                <li><a href="https://github.com/zahidna" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Home photos by <a href="https://unsplash.com/photos/7y4858E8PfA" target="_blank" rel="noopener noreferrer">Robin Schreiner.</a>
              </small></p>
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> and <a href="https://dbarochiya.github.io/me/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a> for the reference and inspiration!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
