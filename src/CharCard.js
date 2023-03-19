import "./assets/result.css"

function Character(props) {
    return ( 
        <div className="result-container">
            <div className="result-title">You're {props.item.name}</div>
            <img className="result-img" src={props.item.src}></img>
            <div className="result-text">{props.item.text} </div>
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