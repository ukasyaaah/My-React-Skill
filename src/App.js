import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import Product from "./components/Product";
import Football from "./components/Football";
import Goal from "./components/Goal";

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
        <Football />
        <Goal goal={false} />
        <MyComponent />
        <Title />
        <Header />
        <Body />
      </header>
    </div>
  );
}

export default App;
