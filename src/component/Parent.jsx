import React, {useState, useEffect} from "react";
import Child from "./Child";


const url="https://jsonplaceholder.typicode.com/todos/1"



const Parent = () => {

    const [ data, setData ] = useState({});

         
     


    useEffect(()=>{
      fetch(url).then(  (res) => {
        // setData( res)
       return res.json()
        console.log(res)
    }).then((data)=>{
      setData(data)
    console.log(data)
    })
    .catch((e)=> {
        console.log("Wahala! Wahala!!", e)
    })
      console.log(data)

    }, [])



  return(
    <>
        <h3>Hello World</h3>
        <h1>{data.title}</h1>
        <Child title={data}/>


    </>
  )
}




export  default Parent