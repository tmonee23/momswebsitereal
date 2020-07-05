import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"

import {TweenMax, Power3} from 'gsap'

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(window.location.href.split("/")[3])
    const tabs = ["Home", "Benefits", "Testimonials", "Reiki", "Meditation", "Nutrition", "Gallary" ,"About Me"]
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    function OnChangeActiveTab(tab){
        setActiveTab(tab)
    }

    function OnChangeActiveClass(){
        if(!navbarIsOpen){            
            setNavbarIsOpen(true);
        }else{
            setNavbarIsOpen(false);
        }
    }

    let navbarContainer = useRef(null);

    useEffect(()=>{
        if(!navbarIsOpen){
            TweenMax.to(navbarContainer,0.5, {left: "-15%", ease:Power3.easeIn});
        }else{
            TweenMax.to(navbarContainer,0.5, {left: "-2%", ease:Power3.easeIn});
        }
    }, [navbarIsOpen])

    return (
        <div>
            <div>
                <img className="navbar-icon" onClick={()=>OnChangeActiveClass()} alt="menuButton" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Icons/588a6507d06f6719692a2d15.png"></img>
            </div>
            <nav ref={el => navbarContainer = el} className="navbar-container">
                {tabs.map(tab => {
                    if(tab === activeTab){
                        return(
                            <li key={tab.toString()} className="navbar-list-item">
                                <Link to={tab} className="navbar-active-link">
                                    <span onClick={()=>{OnChangeActiveTab(tab);OnChangeActiveClass();}}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                </Link>
                            </li>
                        )
                    }else{
                        return(
                            <li key={tab.toString()} className="navbar-list-item">
                                <Link to={tab} className="navbar-link" >
                            <span  onClick={() => { OnChangeActiveTab(tab); OnChangeActiveClass()}}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                </Link>
                            </li>
                        )
                    }
                })}
            </nav>
        </div>
    )
}