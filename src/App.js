import { useEffect, useState } from "react";
import Intro from "./intro";
import Maintab from "./questionTab";

function App() {

const [timer,setTimer] = useState(30)



useEffect(()=>{
    let timeout = setTimeout(() => setTimer(timer+1), 1000);
    if(timer > 26) {clearTimeout(timeout)}

},[timer])

  if(timer < 26){
    return <Intro/>
  } else {
    return <Maintab timer={timer} setTimer={setTimer}/>
  }
}

export default App;
