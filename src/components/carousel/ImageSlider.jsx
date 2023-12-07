import { useState } from "react"
import './style.css'

const ImageSlider = ({Img}) => {
    const[imageIndex,setImageIndex] = useState(0);
  function handlePrev(){
    setImageIndex(index => {
        if(index === 0) return Img.length - 1
        return index - 1
    })
    
  }
  function handleNext(){
    setImageIndex(index => {
        if(index === Img.length - 1) return 0
        return index + 1
    })

  }


  return (
    <>
    <div className="head">ImageSlider</div>
    <div style={{position:"relative"}}>
        {<img src={Img[imageIndex]} className="img-slider-img"/>}
        <button onClick={handlePrev}  style={{left:"0",color: "red",
    fontSize: "4rem"}} className="img-slider-btn">⬅</button>
        <button onClick={handleNext} style={{right:"0",color: "red",
    fontSize: "4rem"}} className="img-slider-btn">➡</button>
    </div>

    </>
  )
}

export default ImageSlider