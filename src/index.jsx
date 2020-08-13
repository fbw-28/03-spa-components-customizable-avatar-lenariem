import React from "react";
//import App from "./App.jsx"
import reactDOM from "react-dom";
import "./Img.css";

function ImgItem ({src, alt, className}) {
  return (
   
      <div className="avatar">
        <img src={src}  
              alt={alt}
              className={className} />
        <p className="size">
          Size <span></span> with{" "}
        </p>
        <p className="type">
          Type <span></span>
        </p>
      </div>
   
  )
}


const All = () => {
  return (
    <div className="pictures">
      <ImgItem />
    </div>
  );
};

reactDOM.render(<ImgItem src="./img/dog.jpg" alt="avatar" className="s circle"/>, document.getElementById("root"));
