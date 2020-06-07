import React, {useState} from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(window.location.href.split("/")[3])
    const tabs = ["Home", "Benefits", "Testimonials" ,"About Me"]

    function OnChangeActiveTab(tab){
        setActiveTab(tab)
    }

    return (
        <div>
            <nav className="navbar-container">
                {tabs.map(tab => {
                    if(tab === activeTab){
                        return(
                            <li key={tab.toString()} className="navbar-list-item">
                                <Link to={tab} className="navbar-active-link">
                                    <span onClick={()=>OnChangeActiveTab(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                </Link>
                            </li>
                        )
                    }else{
                        return(
                            <li key={tab.toString()} className="navbar-list-item">
                                <Link to={tab} className="navbar-link" >
                            <span  onClick={() => OnChangeActiveTab(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                </Link>
                            </li>
                        )
                    }
                })}
            </nav>
        </div>
    )
}