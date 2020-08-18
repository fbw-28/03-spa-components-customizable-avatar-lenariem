import React, { Component } from "react";
import reactDOM from "react-dom";
import "./Index.css";

import ImgNewWindow from "./ImgNewWindow";

//reactDOM.render(<ImgNewWindow />, document.getElementById("root"));

const openWindow = () => {
  window.open(reactDOM.render(<ImgNewWindow />, document.getElementById("root")))
}

function ImgItem({ size = "m", type = "square", sides }) {
  
    return (
    <div className="avatar" onClick={(e) => window.open('e.target')}>
      <img 
      src="./img/dog.jpg" 
      alt="avatar"
      title="Click on me" 
      className={`${size} ${type}`}
      onClick={openWindow} 
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

const All = () => {
  return (
    <>
      <h1>Choose your avatar</h1>
      <div className="pictures">
        <ImgItem size="s" sides="30x30" type="circle" />
        <ImgItem size="s" sides="30x30" type="square" />
        <ImgItem size="s" sides="30x30" type="rounded" />
        <ImgItem size="m" sides="60x60" type="circle" />
        <ImgItem size="m" sides="60x60" type="square" />
        <ImgItem size="m" sides="60x60" type="rounded" />
        <ImgItem size="l" sides="120x120" type="circle" />
        <ImgItem size="l" sides="120x120" type="square" />
        <ImgItem size="l" sides="120x120" type="rounded" />
        <ImgItem size="xl" sides="200x200" type="circle" />
        <ImgItem size="xl" sides="200x200" type="square" />
        <ImgItem size="xl" sides="200x200" type="rounded" />
      </div>
    </>
  );
};

reactDOM.render(<All />, document.getElementById("root"));
