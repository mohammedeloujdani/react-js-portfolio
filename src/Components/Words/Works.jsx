import React from 'react'
import './Works.css'

import Upwork from '../../img/Upwork.png'
import Amazon from '../../img/amazon.png'
import fivver from '../../img/fiverr.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'


const Works = () => {
    return (
    <div className="works">
                <div className="awesone">
                <span>Works For All These</span>
                <span>Brands $ Clients</span>
                <spane> 
                    the development of those elements of a website
                    <br/> 
                    that the customer ...HTML
                    <br/>
                    that the customer ...HTML that the customer ...HTML
                    <br/>
                    that the customer ...HTMLthat the customer ...HTMLthat the customer ...HTML
                    <br/>
                </spane>
                
                <button className="button s-button">Hire me </button>
            
            <div className='blur s-blur1' style={{backgorund:"#APF1FF94"}}></div>

            </div>

            {/**right side commade */}

            <div className="w-right">
                <div className="w-maiCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={fivver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                </div>
                {/**backgournd circle */}

                <div className="w-backCircle blurCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
    )
}

export default Works
