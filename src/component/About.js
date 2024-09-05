import React from 'react'
import './Styles/style.css'
import profile from '../Images/profile.png'
export default function About(){
    return(
        <div className="about">
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src={profile} alt="img"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        
        <ul id="profdata">
          <li><strong>Name:</strong>Shashidhara K</li>
          <li><strong>Age:</strong>20</li>
          <li><strong>Education:</strong>
          <ul>
                <li><strong>Pre-University:</strong> PCMC at Vani PU College, Halekote, Belthangady</li>
                <li><strong>Bachelor's Degree:</strong> Bachelor of Computer Applications (BCA) at Sacred Heart College, Madanthyar</li>
          </ul>
          </li>
          <li><strong>Interests:</strong>
          <ul>
                <li>Coding</li>
                <li>Web Designing</li>
                <li>Problem-Solving</li>
                <li>Logic Building</li>
                <li>Exploring new technologies</li>
          </ul>
          </li>
          <li><strong>Goals:</strong> Continuously improve technical abilities and contribute to projects that make a meaningful impact</li>
        </ul>
        <a href="/" class="cta">Download Resume</a>
      </div>
    </div>
  </section>
</div>
    )
}
