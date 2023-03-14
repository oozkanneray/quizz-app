import { useState } from "react"
import data from "./data"
import Buttons from "./buttons"
import vader from "./dw.png"

export default function Maintab(){

    const [txt,setTxt] = useState(data())
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
                <img className="dw" src={vader}></img>
                <div className="navbar-text">
                    Star Wars Quiz Saga
                </div>
            </div>
            <div className="question-container">
                <div className="question">
                    <div className="question-text">
                        <div>{txt.map(item=> item.id === number && item.question)}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="btn-container">
                        {txt.map(item => item.id == number && item.answers.map(btn => <Buttons btn={btn}/>))}
                    </div>
                </div>
                <div className="control">
                    <button className="changeQuestion"  onClick={() => {setNumber(handleNumberDown(number))}}>&lt;</button>
                    <div className="questionId">{number}</div>
                    <button className="changeQuestion" onClick={() => {setNumber(handleNumberUp(number))}}>&gt;</button>
                </div>
            </div>
        </div>
    )
}