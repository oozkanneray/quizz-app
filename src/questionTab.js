import { useState } from "react";
import data from "./data";
import vader from "./assets/dw.png";
import play from "./assets/play.png";
import Question from "./question";
import Character from "./CharCard";
import chars from "./Chardata";


export default function Maintab(props) {
  const [txt, setTxt] = useState(data);
  const [char,setChar] = useState(chars)
  const [number, setNumber] = useState(1);
  const [tab, setTab] = useState(1);

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

  if (tab === 0) {
    return (
      <div className="question-tab">
        <div className="navbar">
          <div className="navbar-left">
            <img className="dw" alt="vader helmeth" src={vader}></img>
            <div className="navbar-text">Star Wars Quiz Saga</div>
          </div>
          <div className="navbar-right">
            <button
              onClick={() => {
                props.setTimer(0);
              }}
              className="play-intro"
            >
              <img
                className="play-button-img"
                alt="play button "
                src={play}
              ></img>
              Play Intro
            </button>
          </div>
        </div>
        <div className="question-container">
          {txt.map(
            (item) =>
              number === item.id && (
                <Question key={item.id} number={number} item={item} />
              )
          )}

          <div className="control">
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
                  : setTab(1);
              }}
            >
              See Results
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="result-tab">
        <div className="navbar">
          <div className="navbar-left">
            <img className="dw" alt="vader helmeth" src={vader}></img>
            <div className="navbar-text">Star Wars Quiz Saga</div>
          </div>
          <div className="navbar-right">
            <button
              onClick={() => {
                props.setTimer(0);
              }}
              className="play-intro"
            >
              <img
                className="play-button-img"
                alt="play button "
                src={play}
              ></img>
              Play Intro
            </button>
          </div>
        </div>

            <div className="result">
              {char.map(item => 
              <Character tab={tab} key={item.id} setTab={setTab} item={item} />
                
                )}
            </div>
           
      </div>
    );
  }
}
