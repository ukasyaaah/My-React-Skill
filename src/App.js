import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";

const products = [
  {
    id: 1,
    name: "Wafer",
    price: 20000,
    discount: 20,
  },
  {
    id: 2,
    name: "Redmi Note X",
    price: 12000000,
    discount: 40,
  },
   {
    id: 3,
    name: "Bag",
    price: 30000,
    discount: 10,
  },

];

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
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
        />
      ))}

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
