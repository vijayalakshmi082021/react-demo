import React,{Component} from "react";

export default class Willmount extends Component{

     state={
         kiru:0
             }
             handleadd=()=>{
             this.setState({kiru:this.state.kiru+1})
              }
        //    componentDidUpdate(){
        //          console.log("componentDidUpdate")
        //       }

            //  componentDidMount(){
            //      console.log("componentDidMount")
            //  }
            componentWillmount(){
                console.log("componentWillmount")
            }
    render(){
        return(

            <>
            <h1>viji</h1>
               <h1>count:{this.state.kiru+1}</h1>
             <button onClick={this.handleadd}>Add</button> 
         
            
            </>
        )
    }
}