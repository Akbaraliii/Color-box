import React, { Component } from "react";
import { choice } from "./Helpers" 
import './Box.css'

class Box extends Component {
    static defaultProps = {
        allColors: ['purple', 'magenta', 'yellow', 'pink', 'blue', 'red']
    };
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.allColors)};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do{
            newColor = choice(this.props.allColors);
        }while (newColor === this.state.color) 
        this.setState({color: newColor})
    }
    handleClick() {
        this.pickColor()  
    }
    render(){
        return (
            <div className="Box" style={{background: this.state.color}}
            onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box;