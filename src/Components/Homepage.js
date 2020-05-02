import React from 'react'
import HeadstandPhoto from "./Photocomponents/Headstand"
import HomepagePhoto from "./Photocomponents/HomepageTwo"

export default function Header() {

    return(
        <div className="page-container">
            <div className="home-content">
            <HeadstandPhoto/>
            <HomepagePhoto/>
            </div>
        </div>
    )
}