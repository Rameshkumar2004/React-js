import React from "react";
import Productitem from "./Productitem";
// import "./producrt.css";

function Product() {

  return (
    <div>
      <div className="product">
        <Productitem name="Ramesh" color="Green"/>
        <Productitem name="Ramesh" color="Red"/>
        <Productitem name="Ramesh" color="Blue"/>
        <Productitem name="Ramesh" color="Green"/>
      </div>
    </div>
  );
}

export default Product;
