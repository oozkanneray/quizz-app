import vader from "./assets/dw.png";
import play from "./assets/play.png";

function Navbar(props) {



    return (  
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
    );
}

export default Navbar;