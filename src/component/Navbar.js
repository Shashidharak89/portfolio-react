import React from 'react'
import './Styles/style.css'
export default function Home(){
    return(
        <div className="justeg">

  <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
           
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#certificate" data-after="Certificate">Certificate</a></li>
            <li><a href="#skill" data-after="skill">Skills</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>Its me...<span></span></h1>
        <h1>Shashidhar !<span></span></h1>
      
      </div>
    </div>
  </section>

</div>
    )
}
