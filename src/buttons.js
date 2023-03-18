import { useState } from "react"

export default function Buttons(props){

    

    return(
        <button 
        style={props.item.userSelect == props.btn ? {color:"green"} : {color:"black"}}
        onClick={()=>{
            props.item.userSelect = props.btn;
            props.setActive(props.btn)
            console.log(props.item.userSelect)
        }} 
        className="btn">{props.btn}</button>
    )
}