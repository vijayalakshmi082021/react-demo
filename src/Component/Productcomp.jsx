import React,{Component} from 'react'
import "./Product.css"

export default class Productcomp extends Component{
 state={
    productlist:[

    ]
 }


    handlefetch =()=>{

let res=
fetch ('https://fakestoreapi.com/products/1')
.then((resolve)=>{
    return resolve.json();

})
.then((data)=>{
    this.setState({productlist:[data]})
    console.log(data);
})
.catch((err)=>{
console.log(err)
});

 };

    render(){
        return(
            <div>
<h1>ProductPage</h1>
{this.state.productlist.map((da,i)=>(
   <div>
   <img src={da.image} ></img>
   <h1>{da.title}</h1>
   <h1>{da.price}</h1>
   <h1>{da.description}</h1>
   <h1>{da.category}</h1>
   <h1>{da.rating.rate}</h1>
   <h1>{da.rating.count}</h1>

</div>
)
)}
<button onClick={this.handlefetch}>Add</button>
            </div>
        );
    }
}