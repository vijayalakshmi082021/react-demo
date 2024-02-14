import React, { useState } from "react";
function Form(){

    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[email,setemail]=useState("")
    const[isshow,setisshow]=useState(false)



    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handleage=(e)=>{
        setage(e.target.value)
    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setisshow(true)
        
    }
return(

    <div>
{!isshow ?
<form>
    <h1>Register Form</h1>
    <label>Name</label>
    <input placeholder="enter your name"onChange={handlename}/><br/><br/>
    <label>Age</label>
    <input placeholder="enter your age" onChange={handleage}/><br/><br/>
    <label>Email</label>
    <input placeholder="enter your email" onChange={handleemail}/><br/><br/>
    <button onClick={handlesubmit}>submit</button>
</form> :null
}
{isshow &&
<div>
    <h1>Your response have saved successfully</h1>
    <h1>Name:{name}</h1>
    <h2>Age:{age}</h2>
    <h2>Email:{email}</h2>
</div>
}
    </div>
)

}

export default Form