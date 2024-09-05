import React from 'react'
import './Styles/certificates.css'
import enigma from '../Images/enigma.jpg';
// import ekashunyam from '../Images/ekashunyam.jpg';
import joshiana from '../Images/joshiana.jpg'
export default function Certisificate(){
    return(
        <div className="certi">
            <section id="certificate">
                <h2 className="certi-caption">RECOGNITIONS</h2>
                <br/>
                <div className="c">
                    
                    
                        <div className="certi-item">
                            <img src={enigma} alt=""/>
                        </div> 
                        {/* <div className="certi-item">
                            <img src={ekashunyam} alt=""/>
                        </div>  */}
                        <div className="certi-item">
                            <img src={joshiana} alt=""/>
                        </div> 
                 
                    </div>
            
            </section>
            {/* <br/><br/> */}
        </div>
    
    )
}
