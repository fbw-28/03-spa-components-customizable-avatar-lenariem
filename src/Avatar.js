import React from "react";
import img from "./img/dog.jpg";
import "./Index.css";


function ImgItem({size ="m", type ="square", sides}) {
    return (
      <div className="avatar">
      <img 
      src={img} 
      alt="avatar"
      className={`${size} ${type}`}
      
      />
      <p className="size">
        Size <span>{size}</span> with {sides}
      </p>
      <p className="type">
        Type <span>{type}</span>
      </p>
    </div>
    
  );
}


export default ImgItem;
