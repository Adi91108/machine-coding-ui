const Practice = ({ name, branch, count, onclick }) => {
  return (
    <>
      <div>
        <h1>
          My Name is {name} & i'm from {branch} branch
        </h1>
        <button onClick={onclick}>+ : {count}</button>
        <button style={{marginLeft:'1rem'}}>- : {count}</button>
      </div>
    </>
  );
};

export default Practice;
