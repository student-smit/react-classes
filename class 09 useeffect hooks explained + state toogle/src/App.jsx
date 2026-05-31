import { use, useEffect, useState } from "react";

const App = () =>{
let [count , setCount  ] = useState(0);
let [user , setUser] = useState(false)

let increase = () =>{
   setCount(count + 1)
}

let decrease = ()=>{ 
  count > 0 && setCount(count - 1)
}

let login = () =>{
   setUser((prev) => !prev)
}





 useEffect(() => {
     console.log('useEffect ');
     
 },[ user] )



  return(
     <div>

   <h2>Use Effect</h2>
   <p>{count}</p>
   <button onClick={increase} >increase</button>
   <button onClick={decrease} >Decrease</button>
   <button onClick={login  } >Login</button>


     </div>
  )
}

export default App;