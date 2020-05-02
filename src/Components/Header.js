import React from 'react'
import Navbar from "./Navbar"

import Background from "./Photocomponents/Headerbackground";
import Logo from "./Photocomponents/LogoPicutre"

export default function Header() {

    return(
        <div className="header-container">
            <Background/>
            <Logo/>
            <h1 className="header-text">Yoga with Lana Harbers</h1>
            <Navbar/>
        </div>
    )
}