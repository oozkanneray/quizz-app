import { useEffect, useState } from "react";
import Intro from "./intro";
import Maintab from "./questionTab";

function App() {

const [timer,setTimer] = useState(0)



useEffect(()=>{

  if(timer > 26) {
    let timeout = setTimeout(() => setTimer(timer+1), 1000);
    if(timer > 26) {clearTimeout(timeout)}
  }

},[timer])

  if(timer < 26){
    return <Intro timer={timer} setTimer={setTimer} />
  } else {
    return <Maintab timer={timer} setTimer={setTimer}/>
  }
}

export default App;
