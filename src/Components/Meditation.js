import React, {useEffect, useRef} from 'react'
import LilyPhoto from "./Photocomponents/Meditation/MeditationPhotoOne"

import {TweenMax, Power3} from "gsap"

export default function Meditation() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return(
        <div ref={el => pageContainer = el} className="page-container">
            <div className="meditation-content">
            <LilyPhoto/>
            <div className="openingTextContainerMeditation">
            <p className="meditationText">
                Meditation in its essence is the art of being aware,
                aware of what is going on inside and around us.
                There are many methods to help us learn this awareness.
                These could be simple, ordinary and natural.
            </p>
            <p className="meditationText">
                As a reward, we can remain relaxed in the midst of the 
                busiest days and alert with no effort.
            </p>
            <p className="meditationText">
                Meditation is based on a simple understanding:
                rather than fighting the darkness, switch on the light.
            </p>
            <p className="meditationText">
                - Namaste, Lana
            </p>
            </div>
            </div>
        </div>
    )
}