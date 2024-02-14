import React, { useState } from "react";

function Birthday (){

    const [data,setdata]=useState(
        [

            {
          
              id: 1,
          
              name: 'Bertie Yates',
          
              age: 29,
          
              image:
          
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
          
            },
          
            {
          
              id: 2,
          
              name: 'Hester Hogan',
          
              age: 32,
          
              image:
          
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
          
            },
          
            {
          
              id: 3,
          
              name: 'Larry Little',
          
              age: 36,
          
              image:
          
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          
            },
          
            {
          
              id: 4,
          
              name: 'Sean Walsh',
          
              age: 34,
          
              image:
          
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          
            },
          
            {
          
              id: 5,
          
              name: 'Lola Gardner',
          
              age: 29,
          
              image:
          
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          
            },
          
          ]
    )


    const handleclear=()=>{
        setdata([])
    }
    return(
        <div>

<h1>{data.length}Todays Birthday</h1>

{data.map((da,i)=>(
<div key={i}>
    <img src={da.image} width={100} height={80}/>
    <h1>{da.id}</h1>
    <h2>{da.age}years ago</h2>
    <h3>{da.name}</h3>


    </div>
))}
<button onClick={handleclear}>clearall</button>
        </div>
    )
}
export default Birthday