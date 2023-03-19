import "./assets/result.css"

function Character(props) {
    return ( 
        <div className="result-container">
            <div className="result-title">You're {props.item.name}</div>
            <img className="result-img" src={props.item.src}></img>
            <div className="result-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            <button
            className="result-btn"
            onClick={()=>{
                props.setTab(0)
                window.location.reload(true);
            }}
            >
                Restart Quiz
            </button>
        </div>
     );
}

export default Character;