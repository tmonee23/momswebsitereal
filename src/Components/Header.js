import React, {useEffect, useRef} from 'react'
import Navbar from "./Navbar"

import Background from "./Photocomponents/Headerbackground";
import Logo from "./Photocomponents/LogoPicutre"

import {TweenMax, Power3} from "gsap"

export default function Header() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return(
        <div>
                        <Background/>

        <div ref={el => pageContainer = el} className="header-container">
            <div></div>
            <Navbar/>
            <div></div>
            <a href="/">
            <h1 className="header-text">Yoga with Lana Harbers</h1>
            </a>
            <div></div>
            <Logo/>
            <div></div>
        </div>
        </div>

    )
}