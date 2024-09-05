import React from 'react'
import './Styles/style.css'
export default function Footer(){
    return(
        <div className="footerclass">
            <section id="footer">
                <div class="footer container">
                    <div class="brand">
                        <h1><span>F</span>ollow <span>M</span>e <span>O</span>n</h1>
                    </div>
                    <div class="social-icon">
                        <div class="social-item">
                            <a href="https://www.facebook.com/profile.php?id=100077758392662&mibextid=ZbWKwL"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="" /></a>
                        </div>
                        <div class="social-item">
                            <a href="https://www.instagram.com/luminous_alpha_?igsh=ZXJhaXQ1cjlpOHdh"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt=""/></a>
                        </div>
                        <div class="social-item">
                            <a href="/"><img src="https://img.icons8.com/bubbles/100/000000/GitHub.png" alt="" /></a>
                        </div>
                        {/* <div class="social-item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
