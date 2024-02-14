import React, { useReducer } from "react";

const countfunction=(count,action)=>{
    switch(action){
  case "add":
    return count+1

    case "minus":
        return count-1
    }


}



export default function ReducerComp(){
const [count,dispatch]=useReducer(countfunction,0)



    return(



        <div>
<h1>{count}</h1>
<button >Add</button>
<button>Minus</button>

        </div>
    )
}