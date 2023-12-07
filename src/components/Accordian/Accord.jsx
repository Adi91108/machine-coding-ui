import { useState } from "react"


const Accord = ({question, answer}) => {
    const[open,setOpen] = useState(false);
    function handleOpen(){
        setOpen(!open);
    }

  return (
    <>
    <div className="main-heading">
    <p onClick={handleOpen}>{open ? '✖' :'➕'}</p>
    <h3>{question}</h3>
    </div>
    {open && <p className="answers">{answer}</p>}

    </>
  )
}

export default Accord