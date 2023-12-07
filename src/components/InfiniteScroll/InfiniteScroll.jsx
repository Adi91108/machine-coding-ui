import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(<h2 key={i}>{i + 1}</h2>);
  }

  useEffect(()=>{
  
    const onScroll = ()=> {
      if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30){
        setCount(prev => prev + 50);
      }
    }
    window.addEventListener('scroll',onScroll)


  },[])

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        backgroundColor:"black",
        color:'white'
        }}
      >
        <h1>InfiniteScroll</h1>
      </div>
        <div  style={{
        textAlign:"center",
        color:"GrayText",
        backgroundColor:"black"
        }}>{element}</div>
    </>
  );
};

export default InfiniteScroll;
