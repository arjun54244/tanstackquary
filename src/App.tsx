// // import axios from "axios"
// // import { useEffect, useState } from "react"

import Todos from "./components/Todos";



// import Todo from "./components/todo";

//  export default function App() {
//   // const [data, setData] = useState([])
//   //   useEffect(() => {
//   //     axios.get('http://localhost:8080/todos')
//   //     .then((r)=>setData(r.data))
//   //     .catch((e)=>console.log(`todo data Error is  ${e}`))
//   //   }, [])
    
//   return<>
//   <h1>hello</h1>
//  {/* { data.map(({title}:{title:string})=>(
//     <li>{title}</li>
//   ))} */}
//   {/* {JSON.parse(data)} */}
//   {/* {JSON.stringify(data)} */}
//   <Todo/>
//   </>
//  }



export default function App({name}:{name:string}) {
  return (
    <>
      <h1>Hello,{name}</h1>
      {/* <Todo/> */}
      <Todos/>
    </>
  );
}
