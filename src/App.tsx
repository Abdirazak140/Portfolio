import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Home from "./sections/home";
import Projects from "./sections/projects";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
