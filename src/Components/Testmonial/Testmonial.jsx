import React from 'react'
import './Testmonial.css'
import 'swiper/css/pagination';
import 'swiper/css';

const Testmonial = () => {
    
    return (
        <div className="t-wrapper">

            <h1>My Skills</h1>

            <p>HTML</p>
            <div className="container">
            <div className="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div className="container">
            <div className="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div className="container">
            <div className="skills js">65%</div>
            </div>

            <p>React js</p>
            <div className="container">
            <div className="skills react">65%</div>
            </div>

            

                
        </div>

        

    )
}

export default Testmonial
