import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import victor1 from '../../img/Vector1.png';
import victor2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimogi from '../../img/glassesimoji.png';
import { motion } from 'framer-motion';


function Intro() {
    const transition={duration:2,type:'spring'}
    return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Mohammed EL oujdani</span>
            <span>Front-end development is the development of those elements of a website that the customer ...HTML (HyperText Markup Language) is the standard markup language</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icon">
        <a href="https://www.w3schools.com/html/html_links.asp">
        <img src={Github} alt="Github"  />
        </a>
        
        <img src={Linkedin} alt="Linkedin"  />

        <img src={Instagram} alt="Instagram" />
        
        </div>
        </div>
        <div className="i-right">
            <img src={victor1} alt="" />
            <img src={victor2} alt="" /> 
            <img src={boy} alt="" />
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimogi} alt="" />
            
            <motion.div 
            initial={{top:'-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}

            style={{left:'68%'}}>
            <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <div style={{top:'18rem',left:'0rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>


            <div className="blur" style={{backgrounf:'rgp(238 210 255'}}></div>
            <div className="blur" style={{backgrounf:'C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>

        </div>
        
    </div>
    )
}
export default Intro;
