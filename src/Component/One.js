import React,{useState} from 'react'
import FuncCompo from './FuncCompo'
import ClassCompo from './ClassCompo'

const One = () =>{
  const [count,setCount] = useState(false)
  const [countt,setCountt] = useState(false)



  return(
    <div>
      <div className='btn'>
      <button onClick={()=>{setCount(!count)}}>To see styling in Functional Component</button>
      <button onClick={()=>{setCountt(!countt)}}>To see styling in class Component</button>
      </div>

      <div className='both'>
      {count ? <FuncCompo/> : ''}
      {countt ? <ClassCompo/> : ''}
      </div>

    </div>
  )
}

export default One


























// import React, { useState } from 'react';
// import FuncCompo from './FuncCompo';
// import ClassCompo from './ClassCompo';

// function One() {
//     const [count,setCount] = useState(false);
//     const [countt,setCountt] = useState(false);
//   return (
//     <div>
//         <div className='btn'>
//             <button onClick={()=>setCount(!count)}>Function Compo</button>
//             <button onClick={()=>setCountt(!countt)}>Function Compo</button>
//         </div>
//         <div className='both'>
//            { count ? <FuncCompo/> : ''}
//            {countt ? <ClassCompo/> : ''}
//       </div>
      
//     </div>
//   )
// }

// export default One
