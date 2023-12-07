import { useState } from 'react'
import {AccordionData} from './api'
import Accord from './Accord';
import './style.css'

const Accordian = () => {
  const[data, setData] = useState(AccordionData);  
  return (
    <>
    <div className='main-div'>
    <h1>React Accordian Template </h1>
          {
            data.map((current)=>{
              return <Accord key={current.id} {...current}/>
            })
          }  
    {/* {data.map((current)=>{
      return (
        <div key={current.id}>
        <h1><span onClick={handleOpen}>{open ? "✖" : "✔"}</span> <span>{current.question}</span></h1>
        {open && <p>{current.answer}</p>}
        </div>
      
      )
    })} */}

    </div>
    </>

  )
}

export default Accordian