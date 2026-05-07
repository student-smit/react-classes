// import React from "react";
import Card1 from "./Components/card1";
import Home from "./Components/home";


 // <></>   fragment

// const element = document.createElement("h1")
// element.innerText = "hello student"


// export const App1 = () => {
//     const  element = <h1>hy  mosyyeb shah</h1>
//     return(
//         <>
//          <div>{element}</div>
//   </>
//    )
// }

// export default App;

// old format 

// const App =()=>{
//     const greet = React.createElement('h1' ,null,  'hy musayyab')
//     return(
//         <div>{greet}</div>
//     )
// }

// export default App;



const App= () => {
    return (
        <div>
            <Home/>
            <Card1 name={'musayyab'} para={'the world'} />
            <Card1/>

        </div>
    )
}

export default App;
















