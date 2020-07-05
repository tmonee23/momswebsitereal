import React, { useReducer } from 'react'
import {useState, useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import CentralPicture from "../Components/Photocomponents/Benefits/CentralPicture"
import FirstPose from "../Components/Photocomponents/Benefits/FirstPose"
import SecondPose from "../Components/Photocomponents/Benefits/SecondPose"
import ThirdPose from "../Components/Photocomponents/Benefits/ThirdPose"
import FourthPose from "../Components/Photocomponents/Benefits/FourthPose"
import FifthPose from "../Components/Photocomponents/Benefits/FifthPicture"
import SixthPose from "../Components/Photocomponents/Benefits/SixthPicture"
import SeventhPose from "../Components/Photocomponents/Benefits/SeventhPose"
import EightPose from "../Components/Photocomponents/Benefits/EIghtPicture"
import NinthPose from "../Components/Photocomponents/Benefits/NinthPicture"
import TenthPose from "../Components/Photocomponents/Benefits/TenthPicture"
import EleventhPose from "../Components/Photocomponents/Benefits/EleventhPicture"
import TwelthPose from "../Components/Photocomponents/Benefits/TwelthPicture"
import ThirteenthPose from "../Components/Photocomponents/Benefits/ThirteenthPicture"
import FourteenthPose from "../Components/Photocomponents/Benefits/FourteenthPicture"

export default function Benefits() {

    let pageContainer = useRef(null)

    const [currentPose, setCurrentPose] = useState("empty")
    const picturePoses = [  {id: "one", display: <FirstPose/>}, 
                            {id: "two", display: <SecondPose/>}, 
                            {id: "empty", display: <CentralPicture/>},
                            {id: "three", display: <ThirdPose/>},
                            {id: "four", display: <FourthPose/>},
                            {id: "five", display: <FifthPose/>},
                            {id: "six", display: <SixthPose/>},
                            {id: "seven", display: <SeventhPose/>},
                            {id: "eight", display: <EightPose/>},
                            {id: "nine", display: <NinthPose/>},
                            {id: "ten", display: <TenthPose/>},
                            {id: "eleven", display: <EleventhPose/>},
                            {id: "twelve", display: <TwelthPose/>},
                            {id: "thirteen", display: <ThirteenthPose/>},
                            {id: "fourteen", display: <FourteenthPose/>}
                        ]

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div ref={el => pageContainer = el} className="page-container">
            <div className="benefitsContent">
                {picturePoses.map(pose => {
                    if(currentPose === "empty"){
                        if(pose.id === currentPose){
                            return(
                                <div key={pose.id} className="shownPoseContainer">
                                    {pose.display}
                                </div>
                            )
                        }else{
                            return(
                                <div key={pose.id}>
                                </div>
                            )
                        }
                    }else{
                        if(pose.id === currentPose){
                            return(
                                <div key={pose.id} className="shownPoseContainer">
                                    {pose.display}
                                    <button class="closePoseBtn" onClick={() => setCurrentPose("empty")}>X</button>
                                </div>
                            )
                        }else{
                            return(
                                <div key={pose.id}>
                                </div>
                            )
                        }
                    }
                    
                })}
                <div className="buttonContainer">
                <button onClick={() => {onSelectPoseHandler("one")}} className="benefitsPoseButtonOne benefitsPoseButton">
                    1
                </button>
                <button onClick={() => {onSelectPoseHandler("two")}} className="benefitsPoseButtonTwo benefitsPoseButton">
                    2
                </button>
                <button onClick={() => {onSelectPoseHandler("three")}} className="benefitsPoseButtonThree benefitsPoseButton">
                    3
                </button>
                <button onClick={() => {onSelectPoseHandler("four")}} className="benefitsPoseButtonFour benefitsPoseButton">
                    4
                </button>
                <button onClick={() => {onSelectPoseHandler("five")}} className="benefitsPoseButtonFive benefitsPoseButton">
                    5
                </button>
                <button onClick={() => {onSelectPoseHandler("six")}} className="benefitsPoseButtonSix benefitsPoseButton">
                    6
                </button>
                <button onClick={() => {onSelectPoseHandler("seven")}} className="benefitsPoseButtonSeven benefitsPoseButton">
                    7
                </button>
                <button onClick={() => {onSelectPoseHandler("eight")}} className="benefitsPoseButtonEight benefitsPoseButton">
                    8
                </button>
                <button onClick={() => {onSelectPoseHandler("nine")}} className="benefitsPoseButtonNine benefitsPoseButton">
                    9
                </button>
                <button onClick={() => {onSelectPoseHandler("ten")}} className="benefitsPoseButtonTen benefitsPoseButton">
                    10
                </button>
                <button onClick={() => {onSelectPoseHandler("eleven")}} className="benefitsPoseButtonEleven benefitsPoseButton">
                    11
                </button>
                <button onClick={() => {onSelectPoseHandler("twelve")}} className="benefitsPoseButtonTwelve benefitsPoseButton">
                    12
                </button>
                <button onClick={() => {onSelectPoseHandler("thirteen")}} className="benefitsPoseButtonThirteen benefitsPoseButton">
                    13
                </button>
                <button onClick={() => {onSelectPoseHandler("fourteen")}} className="benefitsPoseButtonFourteen benefitsPoseButton">
                    14
                </button>
                </div>
                
            </div>
        </div>
    )


    function onSelectPoseHandler(poseNumber){
        setCurrentPose(poseNumber);
    }
}
