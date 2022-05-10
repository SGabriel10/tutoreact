import React from "react";
class ToggleLogging extends React.Component{
    handleClick(){
        console.log("This is:", this);
    }
    render(){
        return(<button onClick={()=>this.handleClick()}>
            Click me
        </button>);
    }
}
export default ToggleLogging;