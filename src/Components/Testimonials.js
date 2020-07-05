import React, {useState, useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'


import FirstPhoto from "../Components/Photocomponents/Testimonials/testimonialsFirstPhoto"

export default function Testimonials() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    const [activeTest, setActiveTest] = useState("")
    const testimonialsDB = [{id: "", text: "", photo: ""},
                            {id:"Claudia Brueggen (Germany), 2015", text:"I feel very blessed and happy that I had a chance to find my passion for Yoga through Lana Harbers. During my Expat life in Jakarta I came closer to Yoga and then I found in Lana such a wonderful Yoga teacher who really changed my life in many ways. To learn more about my body and what my body is able to do is still a great experience and miracle to me. Yoga is a way of teaching the colors of life to me every day. It challenges me, helps to stay flexible and fit, gives me inner peace, the strong will to go on and reach more. And it transformed my body into a great looking shape. Yoga is now a very important thing in my life and I try to practice every day! Thank you Lana, Namaste:-)  ", photo: ""},
                            {id:"Tim Keto", text:"these classes were the absolute best", photo: ""},
                            {id:"Hannah Wolff", text: "Lana is just the absolute best teacher ever!", photo: <FirstPhoto/>}
                            ]
           

    function setNewTest(name){
        setActiveTest(name)
        console.log(name)
    }

    return (
        <div ref={el => pageContainer = el} className="page-container">
            <div className="testimonials-content">
            {testimonialsDB.map( testimonial => {
                if(testimonial.id === activeTest){
                    return(
                        <div>
                            <div onClick={() => {setNewTest(testimonial.id)}} className="test-container">
                            <div className="test-container-content">
                            <div>{testimonial.id}</div>
                            <br></br>
                            <div>{testimonial.photo}</div>
                            <div>{testimonial.text}</div>
                            </div>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div >
                            <div onClick={() => {setNewTest(testimonial.id)}} className="test-container-inactive">
                                <div>{testimonial.id}</div>
                            </div>
                        </div>
                    )
                }
            })}
            </div>
        </div>
    )
}
