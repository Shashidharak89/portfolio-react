import React from 'react'
import './Styles/style.css'
export default function Contact(){
    return(
        <div className="contact">
            <section id="contact">
                <div className="contact container">
                    <div>
                        <h1 className="section-title">Contact <span>info</span></h1>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="hello" /></div>
                            <div className="contact-info">
                                <h1>Phone</h1>
                                <h2>**********</h2>
                                <h2>**********</h2>
                            </div>
                        </div>
                    <div className="contact-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="hello" /></div>
                        <div className="contact-info">
                            <h1>Email</h1>
                            <h2>Shashidharak334@gmail.com</h2>
                            <h2>cupidscar012@gmail.com</h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="hello"/></div>
                        <div className="contact-info">
                            <h1>Address</h1>
                            <h2>Kukkavu,Mithabagilu village, Killur post,Belthangady taluk,D.K district,Karnataka India</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
