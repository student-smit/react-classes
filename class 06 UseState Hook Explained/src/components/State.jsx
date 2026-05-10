import { useState } from "react";


const State = () =>{ 

    let [count , setCount] =  useState(0)


    let increase = () => {
        setCount(count + 1)
    }

     let decrease = () => {

        //  A && B
        // Agar A true hai → B chalega Agar A false hai → B nahi chalega

         count > 0 &&  setCount(count - 1)

        // if(count > 0){
        //  setCount(count -1)
        // }
        
     }

     return(
        <div>
          <h2>use State</h2>
          <h3>Counter App</h3>
          <p>{count}</p>
          <button onClick={increase} >Increase</button>
          <button onClick={decrease} >Decrease</button>

        </div>
     )
}

export default State;