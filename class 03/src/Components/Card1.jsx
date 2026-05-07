

const Card1 = ({
  name='musayyab' ,
   age= 20 ,
  profession='Developer' ,
   experience = 1 ,
  city='karachi', imageUrl='https://images.unsplash.com/photo-1768777156507-8304c612d621?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}) => {


    return(
      
          <div>
               <div>
                  <p>{name}</p> 
                  <p>{age}</p>
                  <p>{profession}</p>
                  <p>{experience}</p>
                  <p>{city}</p>
                  <img src={imageUrl} alt="" />
            </div>
          </div>
    )
}

export default Card1;











