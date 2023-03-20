import swLogo from "./assets/swLogo.png";

export default function Intro(props) {
  return (
    <div className="intro">
      <button className="close-intro" onClick={() => {
        props.setTimer(30)
      }}>X</button>
      <div className="text-container">
        <div>A long time ago, in a galaxy far,</div>
        <div>far away.... </div>
      </div>
      <div className="img-container">
        <img className="swLogo" alt="star wars logo" src={swLogo}></img>
      </div>
      <div className="question-content">
        <div className="container">
          Turmoil has engulfed the Galactic Republic as Christopher Kade
          finishes studying to become a master in his trade.
        </div>
      </div>
    </div>
  );
}
