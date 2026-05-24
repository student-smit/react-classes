import { useState    } from "react";

const DataBinding = () =>{
 
     let [name , setName] = useState('');
     let [email , setEmail] = useState('')

     console.log('name' , name)
     console.log('email' , email)
     console.log('render')

     let Obj = {
        name1 : name,
        email : email
     }


      console.log(Obj)
    return(
        <div>
        <h1>Two Way DataBinding</h1>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
        <button>submit</button>
        </div>
    )
}

export default DataBinding;