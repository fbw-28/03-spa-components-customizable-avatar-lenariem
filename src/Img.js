import React, { Component } from 'react';
import './Img.css';

const Img = () => {
    
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

export default Img;
