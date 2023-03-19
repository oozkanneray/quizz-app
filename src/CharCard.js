import "./assets/result.css"

function Character(props) {
    const resetGame = () => {
        props.txt.map(item => item.userSelect = "")
        props.setTab(0)
        props.setNumber(1)
        
    }
    return (
 
        <div className="result-container">
            <div className="result-title">You're {props.item.name}</div>
            <img className="result-img" src={props.item.src}></img>
            <div className="result-text">{props.item.text} </div>
            <button
            className="result-btn"
            onClick={()=>{
                resetGame()
            }}
            >
                Restart Quiz
            </button>
        </div>
     );
}

export default Character;