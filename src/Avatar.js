import React from "react";
import img from "./img/dog.jpg";
import "./Index.css";


function ImgItem(props) {
    return (
      <div className="avatar">
      <img 
      src={img} 
      alt="avatar"
      className={`${props.size} ${props.type}`}
      
      />
      <p className="size">
        Size <span>{props.size}</span> with {props.sides}
      </p>
      <p className="type">
        Type <span>{props.type}</span>
      </p>
    </div>
    
  );
}


export default ImgItem;
