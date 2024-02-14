import React,{Component} from 'react';

export default class Counter extends Component{
    state={
        count:0,
        Moviename:"leo"
    }


    handleAdd=()=>{
 
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <h2>Moviename: { this.props.Moviename}</h2>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}