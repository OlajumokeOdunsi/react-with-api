import React from "react";

import { useState } from "react";
const url=("https://jsonplaceholder.typicode.com/todos/1")

const Parent= ()=>{
  const  [data, setData]= useState([])
  const [loading, isLoading]= useState(false)
  const [error, setError] = useState(null) 

  const getData = async()=>{
    fetch(url).then((res)=>{
    console.log(res)
    return res.json()
    console.log(res)
    })
    setData(getData)
}







return(
  <>
  <ul>{data}</ul>
  </>
)
}

export  default Parent
