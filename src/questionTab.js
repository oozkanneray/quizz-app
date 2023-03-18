import { useState } from "react"
import data from "./data"
import Buttons from "./buttons"
import vader from "./assets/dw.png"
import play from "./assets/play.png"
import Question from "./question"

export default function Maintab(props){

    const [txt,setTxt] = useState(data)
    const [number,setNumber] = useState(1)
    

    const handleNumberUp = (x) => {

        if(x >= txt.length){
            return txt.length
        } else{
            return x + 1
        }
    }

    const handleNumberDown = (x) => {
        if(x <= 1){
            return 1
        } else{
            return x - 1
        }
    }


    return(
        <div className="question-tab">
            <div className="navbar">
                <div className="navbar-left">
                    <img className="dw" src={vader}></img>
                    <div className="navbar-text">Star Wars Quiz Saga</div>
                </div>
                <div className="navbar-right">
                    <button onClick={() => {props.setTimer(0)}} className="play-intro">
                        <img className="play-button-img" src={play}></img>
                        Play Intro</button>
                </div>
            </div>
            <div className="question-container">


                {txt.map(item => number == item.id && <Question key={item.id} number={number} item={item}/>)}


                
                <div className="control">
                    <button className="changeQuestion"  onClick={() => {setNumber(handleNumberDown(number))}}>&lt;</button>
                    <div className="questionId">{number}</div>
                    <button className="changeQuestion" onClick={() => {setNumber(handleNumberUp(number))}}>&gt;</button>
        </div>
            </div>
        </div>
    )
}