import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";

function Product({ price, name, discount = 0 }) {
  return (
    <div>
      <h2>{name} </h2>
      <p>
        <s> {price} </s> ({discount}%)
      </p>
      <p>
        <b>
          Rp. {parseInt(price) - (parseInt(price) * parseInt(discount)) / 100}{" "}
        </b>
      </p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Product name={"Wafer"} price={20000} discount={20} />
      <Product name={"Redmi Note X"} price={12000000} discount={40} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />

        <Title />
        <Header />
        <Body />
      </header>
    </div>
  );
}

export default App;
