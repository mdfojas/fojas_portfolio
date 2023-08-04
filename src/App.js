import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <NavBar/>
      <Home/>
      <Experience/>
      <Portfolio/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;