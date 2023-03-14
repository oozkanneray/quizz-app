import { useEffect, useState } from "react";
import Intro from "./intro";
import Maintab from "./questionTab";

function App() {

const [timer,setTimer] = useState(10)


useEffect(()=>{
    let timeout = setTimeout(() => setTimer(timer+1), 1000);
    if(timer > 5) {clearTimeout(timeout)}

},[timer])

  if(timer < 5){
    return <Intro/>
  } else {
    return <Maintab/>
  }
}

export default App;
