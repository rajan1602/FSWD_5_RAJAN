import React, { useState } from 'react'
import pic from "../images/hello.jpg"
import "./imageApp.css"
const ImageApp = () => {
  const [width, setWidth] = useState(200);
  const[height, setHeight] = useState(200);
  const[rotation, setRotation] = useState(0);
  return (
    <div className='disp'>
      <div className='img'>
        <img src={pic} 
        style={{
          width:width,
          height:height,
          transform:`rotate(${rotation}deg)`,
          transition: "all 0.2s ease-in-out",
        }}
        />
      </div>
      <div className='panel'>
        <button onClick={()=>{setWidth(width+10)}}>Increase Width</button>
        <button onClick={()=>{setWidth(width-10)}}>Decrease Width</button>
        <button onClick={()=>{setHeight(height+10)}}>Increase Height</button>
        <button onClick={()=>{setHeight(height-10)}}>Decrease Height</button>
        <button onClick={()=>{setRotation(rotation + 10)}}>Rotate ClockWise</button>
        <button onClick={()=>{setRotation(rotation - 10)}}>Rotate Anti ClockWise</button>
      </div>
    </div>
  )
}

export default ImageApp