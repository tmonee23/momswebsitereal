import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function TwelthPicture() {

    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, 1, {scale: 0, ease:Power3.easeInOut})
        TweenMax.to(picture, 1, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
    <div className="poseCard">
        <img ref={el => picture = el} className="firstPose" alt="Eleventh Pose" 
        src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/13.+Card+Purna+Hanumanasana.jpg">
        </img>
    </div>
    )
}
