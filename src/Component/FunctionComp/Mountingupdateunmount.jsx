import React, { useEffect, useState } from "react";
function Mountingupdateunmount (){
const [name,setname]=useState("")
const [count,setcount]=useState(2)

useEffect(()=>{
    setname("Kiruthikashree")
    console.log(123)

    localStorage.setItem("status","login")
    return()=>{
        localStorage.removeItem("status")
        console.log("closed")
    }
})

const handleadd = ( ) => {
    setcount(count+2)
    }


return(
<div>
    <h1>name is:{name}</h1>
    <div>
        {count}
  <button onClick={handleadd}>count</button>
    </div>
</div>
)
}

export default Mountingupdateunmount