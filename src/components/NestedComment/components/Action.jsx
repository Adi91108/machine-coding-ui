// import React from 'react'

const Action = ({ handleClick,type, className }) => {
  return <div onClick={handleClick} className={className}>{type}</div>;
};

export default Action;
