import "./Box.css";
function Box({name, img,Price}) {
  return (
    <>
      <div className="Mainbox">
        <h3>{name}</h3>
        <div className="box-img">
          <img src={img} />
        </div>
        <p></p>
        <div className="box-text">How to make GUI in Java with example</div>
        <div className="Card-footer">
          <p>Buy Now</p>
            <p className="Price">{Price}</p>
         {   Price>200 ? <p>Discount 10%</p>:<p>Discount 5% </p>}
        </div>
      </div>
    </>
  );
}
export default Box;
