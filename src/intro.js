import swLogo from "./assets/swLogo.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="text-container">
        <div>A long time ago, in a galaxy far,</div>
        <div>far away.... </div>
      </div>
      <div className="img-container">
        <img className="swLogo" src={swLogo}></img>
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
