import React from "react";
//import App from "./App.jsx"
import reactDOM from "react-dom";
import "./Img.css";

function ImgItem({ src, alt, size, type }) {
  return (
    <div className="avatar">
      <img src={src} alt={alt} className={`"${size} ${type}"`} />
      <p className="size">
        Size <span>{size}</span> with{" "}
      </p>
      <p className="type">
        Type <span>{type}</span>
      </p>
    </div>
  );
}

const All = () => {
  return (
    <div className="pictures">
      <ImgItem src="./img/dog.jpg" alt="avatar" size="s" type="circle" />
      <ImgItem src="./img/dog.jpg" alt="avatar" size="s" type="square" />
      <ImgItem src="./img/dog.jpg" alt="avatar" size="s" type="rounded" />
    </div>
  );
};

reactDOM.render(<All />, document.getElementById("root"));
