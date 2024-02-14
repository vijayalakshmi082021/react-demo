import React, { useState } from "react";
import { useEffect } from "react";
function Apicall(){

const[resdata,setresdata]=useState([])
const handleapi = async()=>{
 const response = await fetch("https://jsonplaceholder.typicode.com/todos");
 const data = await response.json()
setresdata(data)
}
useEffect(()=>{
    handleapi()
})
   return(
        <div>
{resdata.map((todo,i)=>(
<h1>{todo.title}</h1>
))}
 <button onClick={handleapi}>api call</button>
        </div>
    )
}

export default Apicall