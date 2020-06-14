import React from 'react'
import HeadstandPhoto from "./Photocomponents/Headstand"
import HomepagePhoto from "./Photocomponents/HomepageTwo"

export default function Header() {

    return(
        <div className="page-container">
            <div className="home-content">
            <HeadstandPhoto/>
            <div className="openingTextContainer">
            <p className="openingText">
                Dear Visitor, 
            </p>
            <p className="openingText">
                Thank you for reaching out and opening this page!
            </p>
            <p className="openingText">
                It can become the first step towards discovering and modeling 
            </p>
            <p className="openingText">
                a better you in a simple and playfull way.
            </p>
            <p className="openingText">
                May we together shift to a more supportive place in and around us.
            </p>
            <p className="openingText">
                I believe we are meant to unfold together. I invite you to 
            </p>
            <p className="openingText">
                read through, reflect and to eventually join me!
            </p>
            <p className="openingText">
                Looking forward to sharing my experience of practicing yoga 
            </p>
            <p className="openingText">
                for over 20 years and motivating you to get started!
            </p>
            <p className="openingText">
                - Namaste, Lana
            </p>
            </div>
            <HomepagePhoto/>
            </div>
        </div>
    )
}