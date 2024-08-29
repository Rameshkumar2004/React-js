import React from "react";
// import "./Productitem.css";

function Productitem({name,color}) {
  const Style={color:color};
  return (
    <div>
      <p style={Style}> Name:{name} </p>
    </div>
  );
}

export default Productitem;
