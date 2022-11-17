import React from 'react'
import "./Intern.css"
import certificate from "../../assets/i-certify.png"
const Intern = () => {
    return (
        <section id="intern">
            <h5>I'm having an</h5>
            <h2>Internship</h2>
            <div className="intern-container">
                <div className="i-certificate">
                    <img src={certificate} alt="certificate" className='i-img'/>
                </div>
                <div className='i-content'>
                    <ul>
                        <li>Physi-Fit is a Digital Physiotherapy Providing Web-Site</li>
                        <li>URL: https://www.physifit.org/</li>
                        <li>I am currently working at Physi-Fit as a Front-End Developer</li>
                        <li>I play an important role at Physi-Fit</li>
                        <li>I Renamed all the Pre-Created files in a Particular Order</li>
                        <li>I Refactored the Home-Page, Dash-Board, Prescription Page</li>
                        <li>I have created a Blog of Groin Pain</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Intern