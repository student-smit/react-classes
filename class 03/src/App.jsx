// import React from "react";
import usersData from "./assets/data/userdata";
import Card1 from "./components/Card1";
import Home from "./components/home";



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
            {usersData.map((data , index) => {
            return (
                <div >
                <Card1 name={data.name}
                      age={data.age}
                      profession={data.profession}
                      experience={data.experience}
                      city={data.city}
                      imageUrl={data.image} />
                 </div>
            )
            })}
            

        </div>
    )
}

export default App;























