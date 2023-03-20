export default function Buttons(props){
    return(
        <button 
        style={props.item.userSelect == props.btn ? {border:"4px solid #27c90a", color:"#1a9106"} : null}
        onClick={()=>{
            props.item.userSelect = props.btn;
            props.setActive(props.btn)
            if(props.number < 6) props.setNumber(props.number + 1)
        }} 
        className="btn">{props.btn}</button>
    )
}