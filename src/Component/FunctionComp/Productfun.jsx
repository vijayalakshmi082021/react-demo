import React, { useState } from "react";

function Productfun(){
const[count,setCount]=useState(1)
const[name,setname]=useState("")




const handlename=( )=>{
setname("kiruthikaramakrishanan")
}

const handleadd=( )=>{

setCount(count+1)

}
    return(

        <div>


   <h1>who:{name}</h1> 
   <button onClick={handlename}>kiruthika</button>        
<h1>count:{count}</h1>
<button onClick={handleadd}>Add</button>
        </div>
    )
}

export default Productfun