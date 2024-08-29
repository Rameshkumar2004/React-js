import "./App.css";
import "./react.css";
import Header from "./Components/Header";
// import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Maincard from "./Components/Maincard";
import Bodytitle from "./Components/Bodytitle";
import Rdffrant from "./RDF/Rdffrant";
// import Card1 from "./Today-code/Card1";
// import Product from "./Condition-Stmt/Product";

function App() {
  return (
    <>
      {/* <h1>Ramesh Kumar</h1>
      <img src={img}
       alt="Error" />
       <p>rameshkumaryadavdbg2004@gmail.com</p>
       <h3> Age:{b}</h3>
       <label htmlFor="">Address:</label>
       <input type="text" /> */}

      {/* <Header/> */}

      <Header />
      <Bodytitle/>
      <Maincard />
      <Footer />

      {/* <Card1></Card1> */}
      {/* <Product/> */}

      {/* <Rdffrant/> */}
    </>
  );
}

export default App;
