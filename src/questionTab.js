import { useState } from "react";
import data from "./data/data";
import Question from "./question";
import Character from "./CharCard";
import chars from "./data/Chardata"; 
import Navbar from "./navbar";


export default function Maintab(props) {
  const [txt, setTxt] = useState(data);
  const [char,setChar] = useState(chars)
  const [number, setNumber] = useState(1);
  const [tab, setTab] = useState(0);
  const [charNumber,setCharNumber] = useState(1)

  const handleNumberUp = (x) => {
    if (x >= txt.length) {
      return txt.length;
    } else {
      return x + 1;
    }
  };

  const handleNumberDown = (x) => {
    if (x <= 1) {
      return 1;
    } else {
      return x - 1;
    }
  };

  const checkUserAnswer = () => {
    let userAnswer = txt.map((item) => item.userSelect);
    return userAnswer.some((element) => element === "");
  };

  const seeResult = () => {
    let sum = 0;
    txt.map(item => item.answers.find(a => a.answer == item.userSelect ? sum +=a.point : null))


    if(sum >= 6 && sum <= 8) setCharNumber(1)
    else if(sum >= 9 && sum <= 11) setCharNumber(2)
    else if(sum >= 12 && sum <= 14) setCharNumber(3)
    else if(sum >= 15 && sum <= 17) setCharNumber(4)
    else if(sum >= 18 && sum <= 20) setCharNumber(5)
    else if(sum >= 21 && sum <= 24) setCharNumber(6)
    
    setTab(1)
  }

  if (tab === 0) {
    return (
      <div className="question-tab">
        <Navbar setTimer={props.setTimer} />
        <div className="question-container">
          {txt.map(
            (item) =>
              number === item.id && (
                <Question key={item.id} number={number} setNumber={setNumber} item={item} />
              )
          )}

          <div className="control">
                <div className="btn-holder">
                <button   
              className="changeQuestion"
              onClick={() => {
                setNumber(handleNumberDown(number));
              }}
            >
              &lt;
            </button>
            <div className="questionId">{number}</div>
            <button
              className="changeQuestion"
              onClick={() => {
                setNumber(handleNumberUp(number));
                checkUserAnswer();
              }}
            >
              &gt;
            </button>
                </div>
                <div className="seeResult-container">
            <button
              className="seeResults"
              onClick={() => {
                checkUserAnswer()
                  ? alert("There are questions you didn't mark.")
                  : seeResult();
              }}
            >
              See Results
            </button>
          </div>
          </div>

        </div>
      </div>
    );
  } else {
    return (
      <div className="result-tab">
        <Navbar setTimer={props.setTimer} />
            <div className="result">
              {char.map(item => item.id == charNumber &&
              <Character txt={txt} setNumber={setNumber} tab={tab} key={item.id} setTab={setTab} item={item} />
                )}
            </div>
           
      </div>
    );
  }
}
