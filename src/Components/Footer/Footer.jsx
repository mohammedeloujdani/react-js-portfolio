import React from 'react'
import './Footer.css'
import insta from '../../img/insta.png'
import face from '../../img/face.png'
import github from '../../img/git.png'
import linkedin from '../../img/link.png'
import wave from '../../img/wave.png'



const Footer = () => {
    return (

        <div className="footer">
            <img src={wave} alt="" style={{width:'100%'}}/>
            <div className="f-content">
                <span>mohamed.eloujdani1@gmail.com</span>
                <span>+212 659163269</span>
                <div className="f-icons">
                    <img src={insta} alt=""/>
                    <img src={github} alt=""/>
                    <img src={linkedin}  alt=""/>
                    <img src={face}  alt=""/>

                </div>
            </div>
        </div>
    )
}

export default Footer
