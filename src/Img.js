import React, { Component } from 'react';
import './Img.css';

export default class Img extends Component {
    constructor(props) {
    super(props);
    this.state = {
        size: ["s", "m", "l", "xl"],
        type: ["square", "rounded", "circle"],
        size: ["30x30", "60x60", "120x120", "200x200"]
    };
    
    }
    
    generateClass = () => {
        const size = ["s", "m", "l", "xl"];
        const type = ["square", "rounded", "circle"]
        
        classNames = this 
    } 
    

    render() {
        return (
            <div className = "pictures">
                <div className="avatar">
                    <img 
                    src="./img/dog.jpg" 
                    alt="avatar"
                    />
                    <p className = "size">Size <span></span> with </p>
                    <p className = "type">Type <span></span></p>
                </div>
            </div>
        )
    }
}
