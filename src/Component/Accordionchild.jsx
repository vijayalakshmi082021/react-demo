import React,{Component} from 'react'

export default class Accordionchild extends Component{
state={
    isshow: false,
};

handlechange =()=>{
    this.setState({isshow: !this.state.isshow});
};


    render(){
        return(
            <>
            <p>{this.props.title}</p>
            <button onClick={this.handlechange}>
                
                
               {this.state.isshow ? "-" :"+"} 
                
                
                </button>
            {this.state.isshow&&
            <p>{this.props.info}</p> 
    }
            </>
        )
    }
}