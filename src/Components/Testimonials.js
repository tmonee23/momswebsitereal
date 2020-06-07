import React, {useState} from 'react'

import FirstPhoto from "../Components/Photocomponents/Testimonials/testimonialsFirstPhoto"

export default function Testimonials() {
    const [activeTest, setActiveTest] = useState("")
    const testimonialsDB = [{id: "", text: "", photo: ""},
                            {id:"Theresa Klobult", text:"loved her classes!", photo: ""},
                            {id:"Tim Keto", text:"these classes were the absolute best", photo: ""},
                            {id:"Hannah Wolff", text: "Lana is just the absolute best teacher ever!", photo: <FirstPhoto/>}
                            ]
           

    function setNewTest(name){
        setActiveTest(name)
        console.log(name)
    }

    return (
        <div className="page-container">
            <div className="testimonials-content">
            {testimonialsDB.map( testimonial => {
                if(testimonial.id === activeTest){
                    return(
                        <div>
                            <div onClick={() => {setNewTest(testimonial.id)}} className="test-container">
                            <div className="test-container-content">
                            <div>{testimonial.id}</div>

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
