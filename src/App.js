import "./style.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Buttons from "./Components/Buttons";
import About from "./Components/About";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Buttons />
      <About />
      <Footer />
    </div>
  );
}

export default App;
