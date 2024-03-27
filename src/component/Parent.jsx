import React from "react";

import { useState } from "react";
const url="https://jsonplaceholder.typicode.com/todos/1"


const[data, setData]=("null")

const Parent =()=>{
  fetch(url).then((res)=>{
    console.log(res)
    return res.json()
  }).then((data)=>{
  }).catch(error=>{
    console.log("An error occured", error)

    const updateData =()=>{
      setData(url)
      console.log(data)
    
    }
    
  })


  return(
    <>
    <h3>Hello World</h3>
    {/* <button onClick={updateData}></button> */}
    <p>{data.title}</p>
    </>
  )
}




export  default Parent
