import React, {useState} from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(window.location.href.split("/")[3])
    const tabs = ["Home", "Benefits", "Testimonials" ,"About Me"]
    const [activeClassName, setActiveClassName] = useState("navbar-container-inactive");

    function OnChangeActiveTab(tab){
        setActiveTab(tab)
    }

    function OnChangeActiveClass(){
        if(activeClassName != "navbar-container"){
            setActiveClassName("navbar-container");
        }else{
            setActiveClassName("navbar-container-inactive");
        }
    }

    return (
        <div>
            <div>
                <img className="navbar-icon" onClick={()=>OnChangeActiveClass()} alt="menuButton" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Icons/588a6507d06f6719692a2d15.png"></img>
            </div>
            <nav className={activeClassName}>
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