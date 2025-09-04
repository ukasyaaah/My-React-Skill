import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Header/>
        <Body/>
      </header>
    </div>
  );
}

export default App;
