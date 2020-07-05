import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function CentralPicture() {

    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, .5, {scale:0, ease:Power3.easeInOut})
        TweenMax.to(picture, .7, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
        <div>
            <img ref={el => picture = el} className="centralBenefitsPicture" alt="Central" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/CentralPic.jpg"></img>
        </div>
    )
}
