import Child3 from "./Child3";

const Child2 = ({name , isLogin}) =>{

  console.log( 'islogin in child 2',isLogin)

    return(
     <div>
        <h2>this is component child 2  </h2>
        <Child3 name={name} />
     </div>
    )
}

export default Child2;