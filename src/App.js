import React from "react";
import ImgItem from "./Avatar";

const All = () => {
  const sizes = ["s","m", "l","xl"];
  const types = ["square", "rounded", "circle"];
  const sides = ["30x30", "60x60", "120x120", "200x200"];
  const data =[
  {size: sizes[0], sides: sides[0], type: types[0]}, 
  {size: sizes[0], sides: sides[0], type: types[1]}, 
  {size: sizes[0], sides: sides[0], type: types[2]},
  {size: sizes[1], sides: sides[1], type: types[0]},
  {size: sizes[1], sides: sides[1], type: types[1]}, 
  {size: sizes[1], sides: sides[1], type: types[2]},
  {size: sizes[2], sides: sides[2], type: types[0]},
  {size: sizes[2], sides: sides[2], type: types[1]}, 
  {size: sizes[2], sides: sides[2], type: types[2]},  
  {size: sizes[3], sides: sides[3], type: types[0]},
  {size: sizes[3], sides: sides[3], type: types[1]},
  {size: sizes[3], sides: sides[3], type: types[2]}
  ];
return (
  <>
    <h1>Choose your avatar</h1>
    <div className="pictures">
    {data.map(item=>{
        return (
          <ImgItem size={item.size} type={item.type} sides ={item.sides}/>
          )
    })}
      {/* <ImgItem size="s" sides="30x30" type="circle" />
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
      <ImgItem size="xl" sides="200x200" type="rounded" /> */}
    </div>
  </>
);
};

export default All;


