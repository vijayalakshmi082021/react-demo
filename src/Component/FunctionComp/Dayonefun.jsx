import React, { useState } from "react";

function Dayonefun(props) {
    const [count,setcount]=useState(10)

    const handleadd=()=>{
        setcount(count+10)
    }
    
    return(
        <div>

<h1>Movie:{props.moviename}</h1>
<>
<h2>Count:{count}</h2>
<button onClick={handleadd}>Add</button>
</>
        </div>
    )
}

export default Dayonefun;