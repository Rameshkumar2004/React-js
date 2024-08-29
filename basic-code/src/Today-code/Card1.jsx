import "./Card1.css";
import Box from "./Box";
import img1 from "../assets/Artimage1.jpg"
import img2 from "../assets/Art-image2.jpg"
import img3 from "../assets/Art-image3.jpg"
function Card1() {
  return (
    <>
      <div className="Container">
        <Box name="Art-Painting" img={img1} Price= {<p><s>250</s> 225</p> }/>
        <Box name="Betta fish Painting" img={img2} Price= {<p><s>300</s> 270</p> } />
        <Box name="golden paint" img={img3}  Price= {<p><s>100</s> 95</p>} />
      </div>
    </>
  );
}
export default Card1;
