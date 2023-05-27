import Hexa from "./components/Hexa";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Home from "./sections/home";
import Projects from "./sections/projects";
import { initializeApp } from "firebase/app";

function App() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  const fireApp = initializeApp(firebaseConfig);

  return (
    <div>
      <div className="absolute z--1">
        <Hexa/>
      </div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
