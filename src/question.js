import { useState } from "react";
import Buttons from "./buttons";

export default function Question(props) {
  
  const [active,setActive] = useState("")

  return (
    <div className="question">
      <div className="question-text">
        <div>{props.item.question}</div>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {props.item.answers.map(btn => <Buttons item={props.item} active={active} setActive={setActive} btn={btn.answer}/>)}
      </div>
    </div>
  );
}
