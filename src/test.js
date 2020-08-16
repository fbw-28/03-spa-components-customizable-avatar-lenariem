import React from "react";

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
console.log(data);
export default data;



/* const data =[
    {size: "s", sides: "30x30", type: "square"}, 
    {size: "s", sides: "30x30", type: "rounded"}, 
    {size: "s", sides: "30x30", type: "circle"}, 
    {size: "m", sides: "60x60", type: "square"},
    {size: "m", sides: "60x60", type: "rounded"}, 
    {size: "m", sides: "60x60", type: "circle"},  
    {size: "l", sides: "120x120", type: "square"},
    {size: "l", sides: "120x120", type: "rounded"}, 
    {size: "l", sides: "120x120", type: "circle"},  
    {size: "xl", sides: "200x200", type: "square"},
    {size: "xl", sides: "200x200", type: "rounded"},
    {size: "xl", sides: "200x200", type: "circle"}
] */
/* 
const sizes = [["s"["square", "rounded", "circle"]], ["m"["square", "rounded", "circle"]], ["l"["square", "rounded", "circle"]], ["xl"["square", "rounded", "circle"]]];
//const types = ["square", "rounded", "circle"];
const sides = ["30x30", "60x60", "120x120", "200x200"];
const myArr = [];

function generateSize(sizesArr) {
    for (let i = 0; i < sizesArr.length; i++) {
        myArr.push({size: sizesArr[i]});
        for(let j =0; j < sizesArr[i].length; j++){
            myArr.push({type: sizesArr[i][j]});
        }
    }
    return myArr;
}
generateSize(sizes);
console.log(myArr); */