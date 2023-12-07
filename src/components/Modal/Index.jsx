import { useState } from "react";
import "./style.css";

const Index = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  if(open){
    document.body.classList.add('active-modal')
}else{
      document.body.classList.remove('active-modal')
    }

  return (
    <>
    <div>

      <button onClick={handleClick}>Open modal</button>

      {open && <div className="modal">
        <div className="overlay" onClick={handleClick}>
          <div className="modal-content">
            <h2>hello modal</h2>
            <p>
              {" "}
              lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident perferendis suscipit officia recusandae, eveniet quaerat
              assumenda id fugit, dignissimos maxime non natus placeat illo
              iusto! Sapiente dolorum id maiores dolores? Illum pariatur
              possimus quaerat ipsum quos molestiae rem aspernatur dicta
              tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.{" "}
            </p>

            <button className="close-modal" onClick={handleClick}>
              X{" "}
            </button>
          </div>

        </div>
      </div>}
    </div>
    </>
  );
};

export default Index;
