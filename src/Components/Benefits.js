import React from 'react'
import {useState} from "react"

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

export default function Benefits() {

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
                            {id: "thirteen", display: <ThirteenthPose/>}
                        ]

    return (
        <div className="page-container">
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
                    One
                </button>
                <button onClick={() => {onSelectPoseHandler("two")}} className="benefitsPoseButtonTwo benefitsPoseButton">
                    Two
                </button>
                <button onClick={() => {onSelectPoseHandler("three")}} className="benefitsPoseButtonThree benefitsPoseButton">
                    Three
                </button>
                <button onClick={() => {onSelectPoseHandler("four")}} className="benefitsPoseButtonFour benefitsPoseButton">
                    Four
                </button>
                <button onClick={() => {onSelectPoseHandler("five")}} className="benefitsPoseButtonFive benefitsPoseButton">
                    Five
                </button>
                <button onClick={() => {onSelectPoseHandler("six")}} className="benefitsPoseButtonSix benefitsPoseButton">
                    Six
                </button>
                <button onClick={() => {onSelectPoseHandler("seven")}} className="benefitsPoseButtonSeven benefitsPoseButton">
                    Seven
                </button>
                <button onClick={() => {onSelectPoseHandler("eight")}} className="benefitsPoseButtonEight benefitsPoseButton">
                    Eight
                </button>
                <button onClick={() => {onSelectPoseHandler("nine")}} className="benefitsPoseButtonNine benefitsPoseButton">
                    Nine
                </button>
                <button onClick={() => {onSelectPoseHandler("ten")}} className="benefitsPoseButtonTen benefitsPoseButton">
                    Ten
                </button>
                <button onClick={() => {onSelectPoseHandler("eleven")}} className="benefitsPoseButtonElevel benefitsPoseButton">
                    Eleven
                </button>
                <button onClick={() => {onSelectPoseHandler("twelve")}} className="benefitsPoseButtonTwelve benefitsPoseButton">
                    Twelve
                </button>
                <button onClick={() => {onSelectPoseHandler("thirteen")}} className="benefitsPoseButtonThirteen benefitsPoseButton">
                    Thirteen
                </button>
                </div>
                
            </div>
        </div>
    )


    function onSelectPoseHandler(poseNumber){
        setCurrentPose(poseNumber);
    }
}
