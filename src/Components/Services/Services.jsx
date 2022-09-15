import React from 'react'
import Heartimogi from '../../img/heartemoji.png';
import Glases from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import './Services.css'
import Resume from '../Services/resume.pdf'


const Services = ()=> {
    return (
    
        <div className="services">
            <div className="awesone">
                <span>My Awesone</span>
                <span>Services</span>
                <spane> 
                    the development of those elements of a website
                    <br/> 
                    that the customer ...HTML
                </spane>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
            <div className='blur s-blur1' style={{backgorund:"#APF1FF94"}}></div>

            </div>
            <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                    imogi={Heartimogi}
                    heading={'Design'}
                    details={"I m Designer Front End Developer use Photoshop et us"}
                    />
                </div>
                <div style={{top:"12rem",left:"-4rem"}}>
                    <Card
                    imogi={Glases}
                    heading={'Developper'}
                    details={"I m Developper Front End Developer use Photoshop et us"}
                    />
                </div>
                <div style={{top:"19rem",left:"12rem"}}>
                    <Card
                    imogi={Humble}
                    heading={'Marketer'}
                    details={"I m marketer Front End Developer use Photoshop et us"}
                    />
                </div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>
        </div>
    )

}

export default  Services;
