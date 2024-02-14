import React,{Component} from "react";

export default class Countercomp extends Component{
 
    state={
kiru:0
    }
    handleadd=()=>{
        this.setState({kiru:this.state.kiru+1})
    }


    render(){
        return(

            <>
            <h1>count:{this.state.kiru+1}</h1>
            <button onClick={this.handleadd}>Add</button>
            <h1>menu:{this.props.ram}</h1>
            
            </>
        )
    }
}